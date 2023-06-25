import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mymap } from './Mymap';
import { Displaybutton } from './components/Displaybutton'
import { createRoot } from "react-dom/client";
import {displayModeStore} from "./components/features/StateStore"
import './App.css'
import { Provider } from 'react-redux';


const App = () => {

  return (
    <Provider store={displayModeStore}>
    <div className="app">
      <div className='mymap'>
        <Mymap/>
      </div>
    </div>
    </Provider>
  );
};

createRoot(document.getElementById("container")).render(<App />);
