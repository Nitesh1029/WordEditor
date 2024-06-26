import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Textbar from './components/Textbar'
import  Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");

    }
  }

  return (
    <>
    <Router>
      <Navbar title="WordEditor" aboutText="About" mode={mode} toggleMode={toggleMode} key={new Date()}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
            <Textbar showAlert={showAlert} heading="WordEditor - Word Counter, Character Counter, Extra Space Remover" mode={mode}/>
      </Switch>
      </div>
    </Router>

    </>
  );
}

export default App;