import React, { useContext, useState } from "react"

// Note : Context Provider ko sabbai logical code jati yo js file ma lekhne try garko.. chatta organize garauna ko lagi

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}



export function ThemeProvider({ children })                 // yo line ko children ma UseContext.js ko <FunctionContextComponent /> aai rako huncha.
{
    const [darkTheme, setDarkTheme] = useState(true)        // Creating the darkTheme state

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)       // Updating the darkTheme state
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>

                    {children}                      {/* Yo children ma <FunctionContextComponent /> aai rako huncha */}

                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    )

}



