import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
/* import About from './Components/About'; */
import React, { useState } from 'react';
/*import 
 {BrowserRouter as Router, 
  Route, 
  Link, 
  Routes} 
  from 'react-router-dom'; */

function App() {
  const [mode, setMode]=useState('light');
  const[alert,setAlert]=useState('null');

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);


  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      document.getElementById('textForm-container').style.color="white";
      document.getElementById('preview-container').style.color="white";
      showAlert("dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.getElementById('textForm-container').style.color="black";
      document.getElementById('preview-container').style.color="black";
      showAlert("light mode has been enabled","success");
      document.title="TextUtils-Light Mode";
    }
  }
  
  return (
    <>
   
    <Navbar title="textutils" aboutText="About Text" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
   
    <TextForm showAlert={showAlert} heading="enter the text below to analyze"/>
            
  
 
    </div>
   
    



    </>
    
  );
}

export default App;
