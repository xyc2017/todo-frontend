import {Outlet} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is my Todo App</h1>
      {/* the outlet exposes all the child routes of App */}
      <Outlet /> 
    </div>
  );
}

export default App;
