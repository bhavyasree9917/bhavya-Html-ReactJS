import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
 <h2>reactjs projects</h2>
    <p>application form for student enrollment</p>
    <label for="">First Name:</label>
          <input type="text" /><br/>
        
          <label for="">Last Name:</label>
          <input type="text" /><br/>
          
          <label for="">DateOfBirth: </label>
          <input type="date"  /><br/>
          
          <label for="">Email ID: </label>
          <input type="text" readonly /><br/>
          
          <label for="">Mobilenumber: </label>
          <input type="number" /> <br/>

           
    </div>
  );
  
}

export default App;
