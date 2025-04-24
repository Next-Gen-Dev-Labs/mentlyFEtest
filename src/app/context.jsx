'use client'
import {createContext, useContext, useState, useEffect} from "react";

const GlobalStateContext = createContext()

export const GlobalStateProvider = ({children}) =>{
    const [theme, setTheme] = useState('light');
    const [showSideBar, setShowSideBar] = useState(false)
    const [showManageWidget, setShowManageWidget] = useState(false)
    
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const storedSaving = localStorage.getItem('totalSavings');
        if (storedTheme) {
          setTheme(storedTheme);
          document.documentElement.classList.add(storedTheme);
        }

      }, []);


    
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    
        // Add and remove appropriate classes on document body
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
      };
    return(
        <GlobalStateContext.Provider value={{theme, toggleTheme, showSideBar, setShowSideBar, showManageWidget, setShowManageWidget}}>
            {children}

        </GlobalStateContext.Provider>
    )
    
}

export const useGlobalState = () =>useContext(GlobalStateContext)