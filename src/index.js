 import React from 'react';
import ReactDOM from 'react-dom';
 import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './index.css';
 import Play from './Play';


//
 import InfoBar from './InfoBar'
//
//
import registerServiceWorker from './registerServiceWorker';



 ReactDOM.render(

     <Play/>,


     document.getElementById('root'));
 registerServiceWorker();
