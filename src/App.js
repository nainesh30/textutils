import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Textutils from "./component/Textutils/Textutils";
import React, { useState } from "react";
import Alert from "./component/Alert";
import Trial from "./component/Trial";
import {BrowserRouter as Router , Routes,
Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  function alertrun(message, type) {
    setalert({
      msg: message,
      type: type,
    });
  }
  function modehandler() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#050638";
      // document.body.style.Color = 'white'
      alertrun("Dark Mode Turned on", "success");
      document.title=" TextUtils-Dark mode"


      setTimeout(() => {
        setalert(null)
      }, 2000);

      console.log(mode);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#e2e2e2";
      document.title=" TextUtils-Light mode"

      alertrun("Light Mode Turned on", "danger");
      setTimeout(() => {
        setalert(null)
      }, 2000);
    }
    console.log("DARK MODE");
  }
  return (
    <Router>
    <>
    
      <Navbar
        title="TextUtility by Nainesh"
        toggle={modehandler}
        theme={mode}
      />

      <Alert alert={alert} />
      <Routes>

      <Route  exact path="/" element={<Textutils theme={mode} fun={alertrun}  />}>
       
    </Route>
    
     <Route path="/trial" element={<Trial/>}>

     </Route>
      </Routes>
    </>

      </Router>
  );
}

export default App;
