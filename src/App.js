import React, { createContext, useState,useEffect } from 'react';
import './App.css';
import {Routes,Route} from 'react-router'
import MainPage from './Containers/MainPage';
import Projectpage from './Containers/Projectpage';





export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("dark")

  const ToggleTheme = () =>  {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }


  return (
    
      
    <ThemeContext.Provider value={{theme,ToggleTheme}}>

     <div className="app" id={theme}>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/allprojects' element={<Projectpage/>}/>
            </Routes>
    </div>

   </ThemeContext.Provider>
    
   
  );
}

export default App;
