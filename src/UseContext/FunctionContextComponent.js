import { useContext } from 'react'                          // useContext lai import gareko cha
import { ThemeContext } from './UseContext'


export default function FunctionContextComponent() 
{
    const darkTheme = useContext(ThemeContext)              // Context Provider le pathayeko value yesari grab garincha

    // styling object create gareko
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }


    return (
        <div style={themeStyles}> Function Theme </div>
    )

}



