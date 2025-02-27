import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
 <h2>reactjs projects</h2>
    <p>application form for student enrollment</p>
    <label for="">First Name:</label>
          <input type="text" />
        
          <label for="">Last Name:</label>
          <input type="text" />
          
          <label for="">DateOfBirth: </label>
          <input type="date"  />
          
          <label for="">Email ID: </label>
          <input type="text" readonly />
          
          <label for="">Mobilenumber: </label>
          <input type="number" /> 
           
    </div>
  );
  
}

export default App;
