import React from "react";

import { ThemeProvider } from "./ThemeContext";                 // ThemeContext.js file ko ThemeProvider function lai import gareko ho

import FunctionContextComponent from './FunctionContextComponent'


export default function UseContext() 
{
    return (
            <ThemeProvider>    

                <FunctionContextComponent />
                
            </ThemeProvider>
    )
}
