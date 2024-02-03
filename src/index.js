import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import New from './component/fun';
import Rout from './component/new';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './route.js/home';
import Login from './route.js/login';
import Register from './route.js/register';
import Pure from './component/pure';
import Task from './task/project';
import Myfunc from './component/hoc';
import First from './component/classone';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myfunc/>
    </React.StrictMode>

    // <>
        
    //     <BrowserRouter>
    // <New/>

    //     <Routes>
    //        <Route path='/home' element={<Home/>}/>
    //     <Route path='/login' element={<Login/>}/>
    //      <Route path='/res' element={<Register/>}/>

    //      </Routes>
    // </BrowserRouter>

    //  </>
  

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
