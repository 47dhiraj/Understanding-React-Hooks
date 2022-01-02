import { useCallback, useState } from "react";
import List from "./List"


// Referential equality ko example ko lagi pani useCallback use garincha like useMemo
const UseCallback = () => {

    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((incrementor) => {             // useCallback() use garda function nai return huncha
        return [ number + incrementor, number + incrementor + 1, number + incrementor + 2 ]
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (

        <div style={theme}>

            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value)) } />

            <button onClick={() => setDark(prevDark => !prevDark) }>Toggle Theme</button>

            <List getItems={getItems} />                {/* getItems={getItems} chai passing function as props gareko ho */}

        </div>
    );  
}
 
export default UseCallback;