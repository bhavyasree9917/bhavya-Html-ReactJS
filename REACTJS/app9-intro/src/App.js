import logo from './logo.svg';
import './App.css';
import Viddu from './Viddu';
import User2 from './User2';
import User3 from './User3';
import Header from './Header';
import ClickCounter from './Clickcounter';
import Form from './Form';

function App() {
  return (
    <div className="App">
     <h2>reactjs projects</h2>
     {/* <Viddu/> */}
     {/* <User2/> */}
     {/* <User3/> */}
     {/* <Header/> */}
     <ClickCounter/>
     <Form/>
     <TitleDisplay title={title} />

     
     
    </div>
  );
}

export default App;
