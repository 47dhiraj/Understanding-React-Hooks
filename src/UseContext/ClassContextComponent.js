import React, { Component } from 'react'
import { ThemeContext } from './UseContext'


export default class ClassContextComponent extends Component {

    themeStyles(dark)
    {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem' 
        }
    }



    render () {

        return (
            <ThemeContext.Consumer>             
                {                           // Context Provider (i.e ThemeContext Provider) batw pathayeko data as a prop, yo Context Consumer vitra aaucha (value chai darkTheme vanni function ma cha)
                    darkTheme => {
                        return <div style={this.themeStyles(darkTheme)}> Class Theme </div>
                    }
                }
            </ThemeContext.Consumer>
        )

    }


}




