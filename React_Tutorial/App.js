import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const dtObj = new Date();
  const currHour = dtObj.getHours();
  const exactTime = dtObj.getHours()+":"+dtObj.getMinutes()+":"+dtObj.getSeconds();
  const exactTime1 = dtObj.getTime();
  const todaysDate = dtObj.getVarDate();
  console.log("currHour : " + currHour);
  console.log("todaysDate : " + todaysDate);
  let timeOfDay = "Day!";
  let bgColor_timeOfDay = "alert-light";

  timeOfDay = currHour<12 ? "Morning!" : (currHour>16 ? (currHour>20 ? "Night!" : "Evening!") : "Afternoon!");
  bgColor_timeOfDay = currHour<12 ? "alert-info" : (currHour>16 ? (currHour>20 ? "alert-secondary" : "alert-success") : "alert-warning");
  const greet = "Good " + timeOfDay;
  console.log(greet);
  console.log(bgColor_timeOfDay);

  return (
    <div className="App">

      <div className={bgColor_timeOfDay} role="alert">
        {greet} 
      </div>
      <div className="alert alert-primary" role="alert">
        The time is : {currHour} o'clock
      </div>

      <div className="alert alert-warning alert-dismissible fade show mb-4" role="alert">
        The exact time now is => <strong>{''+todaysDate} | {exactTime} | {exactTime1}</strong> 
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
{/* 
      <button type="button" className="btn btn-block btn-purple">
          REFRESH
      </button>

      <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        Single toggle
      </button>

      <button type="button" className="btn btn-secondary">Secondary</button>
     
      <button type="button" className="btn btn-default">Default</button>

      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>

      <br></br>
      <button type="button" className="btn btn-outline-primary waves-effect">Primary</button>
      <button type="button" className="btn btn-outline-default waves-effect">Default</button>
      <button type="button" className="btn btn-outline-secondary waves-effect">Secondary</button>
      <button type="button" className="btn btn-outline-success waves-effect">Success</button>
      <button type="button" className="btn btn-outline-info waves-effect">Info</button>
      <button type="button" className="btn btn-outline-warning waves-effect">Warning</button>
      <button type="button" className="btn btn-outline-danger waves-effect">Danger</button>

      <br></br>
      <button type="button" className="btn btn-primary btn-rounded">Primary</button>
      <button type="button" className="btn btn-default btn-rounded">Default</button>
      <button type="button" className="btn btn-secondary btn-rounded">Secondary</button>
      <button type="button" className="btn btn-success btn-rounded">Success</button>
      <button type="button" className="btn btn-info btn-rounded">Info</button>
      <button type="button" className="btn btn-warning btn-rounded">Warning</button>
      <button type="button" className="btn btn-danger btn-rounded">Danger</button>

      <br></br>
      <button className="btn btn-primary"><i className="fas fa-magic mr-1"></i> Left</button>
      <button className="btn btn-default">Right <i className="fas fa-magic ml-1"></i></button>
      <button type="button" className="btn btn-default btn-lg">Large button</button>
      <button type="button" className="btn btn-primary btn-lg">Large button</button>
      <button type="button" className="btn btn-default btn-sm">Small button</button>
      <button type="button" className="btn btn-primary btn-sm">Small button</button>
      <button type="button" className="btn btn-default btn-lg btn-block">Block level button</button>
      <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
       */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
