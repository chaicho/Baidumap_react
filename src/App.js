import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mymap } from './Mymap';
import { Displaybutton } from './components/Displaybutton'


import './App.css'

const App = () => {
  const [displayroute, setDisplayroute] = useState(false);
  const [displaydevice, setDisplaydevice] = useState(false);
  const handleRouteDisplayChange = () => {
    setDisplayroute(!displayroute)
  }
  const handleDeviceDisplayChange = () => {
    setDisplaydevice(!displaydevice)
  }

  return (
    <div className="app">
      <div className='mymap'>
        <Mymap
          displaydevice={displaydevice}
          displayroute={displayroute}
        />
      </div>
      <div className="SelectView">
        <Displaybutton
          text='显示路径'
          active={displayroute}
          onClick={handleRouteDisplayChange}  ></Displaybutton>
        <Displaybutton
          text='显示龙门架'
          active={displaydevice}
          onClick={handleDeviceDisplayChange}  ></Displaybutton>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
