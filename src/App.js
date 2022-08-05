import React, { createContext,useContext, useState } from 'react';
import './App.css';
import {Routes,Route} from 'react-router'
import MainPage from './Containers/MainPage';
import Projectpage from './Containers/Projectpage';


function App() {

  return ( 

     <div className="app">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/allprojects' element={<Projectpage/>}/>
            </Routes>
    </div>

    
   
  );
}

export default App;
