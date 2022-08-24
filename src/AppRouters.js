import React from 'react';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

import HomePage from './HomePage';
import Info from './info';
import Join from './join';

function AppRouters() {
    const navigate = useNavigate();

    const navigateHome =() =>{

        navigate('/');
    }
    
    const navigateJoin =() =>{
    
        navigate('/join');
    }
    
    const navigateInfo =() =>{
    
        navigate('/info');
    }
  return (
    <div>
        <ul>
            <li><a href='' onClick={navigateHome}>Home</a></li>
            <li><a href='' onClick={navigateInfo}>Info</a></li>
            <li><a href='' onClick={navigateJoin}>Join</a></li>
        </ul>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path='/join' element={<Join/>}/>
        </Routes>
        </div>
  );
}

export default AppRouters