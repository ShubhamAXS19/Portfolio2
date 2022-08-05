import React,{useContext,createContext,useState, } from 'react'

const ThemeContext = createContext();

export const ContextProvider = ({children}) => {

const [lightTheme, setLightTheme] = useState(false)

const turningOnLightMode = () => {
    setLightTheme(true);
}

  return (
    <ThemeContext.Provider value={{lightTheme, turningOnLightMode}}>{children}</ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)