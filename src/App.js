import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
     <div className="App">
 <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h2>
         Welcome to iOS Application
     </h2>
 </header>
<h1>Piaic Offering Best Following Courses</h1>
          <center>
          <fieldset>
          <legend>
          <b><i>
          <font color="grey">Piaic Offering</font>
          </i></b>
          </legend>
          <h2><font color="darkblue">
          The Best Four Computer Courses Free
          </font></h2>
          </fieldset>
          </center>
          <tl><center> 
          <li><font color="darkblue">Artificial Intelligence</font></li>
          <li><font color="darkblue">Native Cloud Computing</font></li>
          <li><font color="darkblue">Blockchain</font></li>
          <li><font color="darkblue">Internet of Things</font></li>
          </center></tl>
<br></br>
<center>
          <h4><font color="#bada55">
          Created by:</font> <font color="#beg">Javed Hussain</font></h4>
</center>
</div>

    );

}

export default App;