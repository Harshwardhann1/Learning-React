import React, { useState, useEffect, useContext, createContext, useRef } from 'react';

// Create a context for CRUD data management
const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState([]);

  // Persist data in localStorage and retrieve it on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('submittedData')) || [];
    setSubmittedData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('submittedData', JSON.stringify(submittedData));
  }, [submittedData]);

  return (
    <CrudContext.Provider value={{ submittedData, setSubmittedData }}>
      {children}
    </CrudContext.Provider>
  );
};

const Crud = () => {
  const { submittedData, setSubmittedData } = useContext(CrudContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    age: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const firstNameInput = useRef(null);

  // Focus on the first input field when the component mounts
  useEffect(() => {
    if (firstNameInput.current) {
      firstNameInput.current.focus();
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.age) {
      alert('All fields are required!');
      return;
    }

    if (isNaN(formData.phone)) {
      alert('Phone number should be a valid number!');
      return;
    }

    if (editIndex !== null) {
      const updatedData = [...submittedData];
      updatedData[editIndex] = formData;
      setSubmittedData(updatedData);
      setEditIndex(null);
    } else {
      setSubmittedData([...submittedData, formData]);
    }

    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      age: '',
    });
  };

  const handleDelete = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
  };

  const handleEdit = (index) => {
    setFormData(submittedData[index]);
    setEditIndex(index);
  };

  return (
    <div style={styles.container}>
      <h1>Forms</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="firstName" style={styles.label}>First Name</label>
          <input
            ref={firstNameInput}
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

      <h2>Submitted Data</h2>
      <ul>
        {submittedData.map((entry, index) => (
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

// Wrap the Crud component with the CrudProvider for global state
const App = () => (
  <CrudProvider>
    <Crud />
  </CrudProvider>
);

export default App;
