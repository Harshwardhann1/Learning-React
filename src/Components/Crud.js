import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

const Crud = () => {
  // State for managing form data, submitted data, and edit index
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    age: '',
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // For editing an entry
  const [error, setError] = useState(null); // For displaying errors
  
  // UseRef to focus on the first input field when the form loads
  const firstNameInput = useRef(null);

  // Focus on the first name input when the form is mounted
  useEffect(() => {
    firstNameInput.current.focus();
  }, []); // Empty array means this runs only once when the component mounts

  // Handle input changes and update form data
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Memoizing the filtered data (just an example to show useMemo)
  const filteredData = useMemo(() => {
    return submittedData.filter((entry) => entry.age > 18); // Example filter logic
  }, [submittedData]); // Recompute the filtered data only when submittedData changes

  // Validate phone number and submit form data
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    setError(null); // Reset error message

    // Basic validation: Check if all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.age) {
      setError('All fields are required!');
      return;
    }

    // Phone number validation (it should be numeric)
    if (isNaN(formData.phone)) {
      setError('Phone number should be a valid number!');
      return;
    }

    // If editing an existing entry, update the entry
    if (editIndex !== null) {
      const updatedData = [...submittedData];
      updatedData[editIndex] = formData;
      setSubmittedData(updatedData);
      setEditIndex(null); // Reset editIndex after update
    } else {
      // Add new data to the submittedData array
      setSubmittedData([...submittedData, formData]);
    }

    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      age: '',
    });
  };

  // Delete a specific entry from the submittedData array
  const handleDelete = useCallback((index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
  }, [submittedData]); // useCallback prevents unnecessary re-renders

  // Set the form data for editing an existing entry
  const handleEdit = (index) => {
    setFormData(submittedData[index]);
    setEditIndex(index); // Set the index for editing
  };

  return (
    <div style={styles.container}>
      <h1>Forms</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="firstName" style={styles.label}>First Name</label>
          <input
            ref={firstNameInput} // Focus the input on form mount
            type="text"
            id="firstName"
            style={styles.input}
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="lastName" style={styles.label}>Last Name</label>
          <input
            type="text"
            id="lastName"
            style={styles.input}
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="phone" style={styles.label}>Phone</label>
          <input
            type="tel"
            id="phone"
            style={styles.input}
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="age" style={styles.label}>Age</label>
          <input
            type="number"
            id="age"
            style={styles.input}
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>

        <button style={styles.button} type="submit">
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>

      {/* Display error message */}
      {error && <div style={styles.error}>{error}</div>}

      {/* Display submitted data with edit and delete buttons */}
      <h2>Submitted Data</h2>
      <ul>
        {filteredData.map((entry, index) => (
          <li key={index}>
            Full Name - {entry.firstName} {entry.lastName}, Phone: {entry.phone}, Age: {entry.age}
            <button style={styles.editButton} onClick={() => handleEdit(index)}>Edit</button>
            <button style={styles.deleteButton} onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '16px',
    fontWeight: '600',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
};

export default Crud;
