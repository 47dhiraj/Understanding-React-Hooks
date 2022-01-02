import React, { useState } from "react";

import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'


// Note : Context is for passing down props essentially all the down to any of the wrapped component or even it's children component at once, rather than passing props one by one to each component.

export const ThemeContext = React.createContext()



export default function UseContext() 
{
    const [darkTheme, setDarkTheme] = useState(true)


    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


    return (
        <>
            <ThemeContext.Provider value={darkTheme}>           {/*Context Provider le le jun jun component lai wrap garcha tyo sabbai component and it's children component ma ekkai choti as a prop value pathauna sakcha (i.e yo line ko  value is a prop)*/}

                <button onClick={toggleTheme} > Toggle Theme </button>

                <FunctionContextComponent />

                <ClassContextComponent />

            </ThemeContext.Provider>
        </>
    )

}


