# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
L e a r n i n g - R e a c t 
 
 


1. Core Concepts
JSX (JavaScript XML):
Syntax extension for writing UI components.
Example: <h1>Hello, {name}!</h1>
Components:
Functional Components: (props) => { return JSX; }
Class Components: class Component extends React.Component
Props:
Passing data to child components.
Example: <ChildComponent name="John" />
State:
Internal data management using useState or this.state (in class components).
Example: const [count, setCount] = useState(0);


2. React Hooks
useState:
State management in functional components.
Example: const [value, setValue] = useState("");
useEffect:
Side effects like data fetching, subscriptions, and DOM manipulation.
Example: useEffect(() => { fetchData(); }, []);
useContext:
Access data from React Context API.
Example: const value = useContext(MyContext);
useRef:
Access or manage DOM elements directly.
Example: const inputRef = useRef(null);
useReducer:
State management for more complex logic.
Example: const [state, dispatch] = useReducer(reducer, initialState);
useMemo:
Memoize expensive computations.
Example: const result = useMemo(() => computeExpensiveValue(input), [input]);
useCallback:
Memoize functions to avoid unnecessary re-renders.
Example: const memoizedCallback = useCallback(() => doSomething(), [dependency]);


3. Component Lifecycle
Functional Components: Use hooks like useEffect.
Class Components:
Mounting: componentDidMount
Updating: componentDidUpdate
Unmounting: componentWillUnmount


4. Forms and Inputs
Controlled Components:
Managing form state using useState.
Example: <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
Validation and error handling in forms.


Uncontrolled Components with useRef.
5. State Management
Local state with useState or useReducer.
Context API for global state sharing.
External libraries for complex state:
Redux, Zustand, Jotai, or Recoil.


6. React Router
Dynamic navigation in single-page applications.
Core features:
BrowserRouter, Routes, and Route.
Route Params: useParams
Query Strings: useSearchParams
Navigation: useNavigate


7. API Calls and Data Fetching
Fetching Data:
Using fetch or axios in useEffect.
Example:
javascript

useEffect(() => {
  fetch('https://api.example.com')
    .then(res => res.json())
    .then(data => setData(data));
}, []);

Async/Await for better readability.
Data fetching libraries:
React Query: Handles caching and state management for API calls.
SWR: Lightweight and similar to React Query.


8. Performance Optimization
React.memo:
Memoize components to prevent unnecessary re-renders.
Lazy Loading:
Dynamically import components using React.lazy and Suspense.
Example:
javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));
Virtualization:
Rendering large lists efficiently using libraries like react-window.


9. Error Handling
Error Boundaries:
Catch JavaScript errors in component trees.
Example: componentDidCatch in class components.
Handling promises in API calls:
Use try...catch blocks with async/await.


10. Testing
Unit Testing:
Write tests using libraries like Jest and React Testing Library.
Test components, hooks, and utilities.
Snapshot Testing:
Save component output snapshots.
Integration Testing:
Simulate user interactions with components.


11. Styling
Inline Styles:
Pass a style object to components.
CSS Modules:
Import CSS as scoped modules.
CSS-in-JS:
Libraries like Styled-Components or Emotion.
Utility Libraries:
Tailwind CSS, Bootstrap, or Material-UI for faster styling.


12. Advanced Topics
Higher-Order Components (HOCs):
Functions that enhance components by adding behavior.
Render Props:
Share functionality between components.
Custom Hooks:
Encapsulate reusable logic in a hook.



13. Animations
Libraries for animations:
Framer Motion, React Spring, or React Transition Group.


14. TypeScript with React
Add type safety to components, props, and state.


Example:
tsx
type Props = { name: string; age: number };
const Component: React.FC<Props> = ({ name, age }) => <p>{name} is {age} years old</p>;


15. Tools and Ecosystem
DevTools:
React Developer Tools for debugging.
Code Splitting:
Use React.lazy and Suspense to split code.
Next.js:
A framework for server-side rendering and static site generation.
