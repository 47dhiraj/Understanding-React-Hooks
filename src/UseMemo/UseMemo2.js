import { useMemo, useEffect, useState } from "react";

// Example of useMemo() for showing the use case of referential equality.

const UseMemo = () => {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)


    const doubleNumber = useMemo(() => {                // yedi number state ko value change vaye matra, yo useMemo le return gareko slowFunction() ko memory reference differnt ho vanera bujcha                                               
        return slowFunction(number)                         
    }, [number])                                        

    useEffect(() => {       
        console.log('Number Changed !')

    }, [doubleNumber])                                  // yedi doubleNumber ma hold vayeko slow function ko result ko memory reference equal navaye or different vayo vani balla useEffect run huncha



    // inline styline dina ko lagi style object create gareko
    const themeStyles = useMemo(() => {                 // yedi dark state ko value change vaye matra, yo useMemo le return gareko object reference chai same chaina different ho vanera bujcha
        return {
            backgroundColor : dark ? 'black' : 'white',
            color : dark ? 'white' : 'black'
        }
    }, [dark])                                          

    useEffect(() => {
        console.log('Theme Changed !')

    }, [themeStyles])                                   // yedi themeStyles object change vayo vani yo useEffect() hook execute huncha




    return (
        <>

            <input type="number" value={number} onChange = {(e) => setNumber(parseInt(e.target.value)) } />

            <button onClick={() => setDark(prevDark => !prevDark) }> Change Theme </button>

            <div style={themeStyles} > { doubleNumber } </div>

        </>
    );
}


function slowFunction(num)
{
    console.log('Calling Slow Function')

    for(let i=0; i<= 1000000000; i++){}

    return num * 2
}
 


export default UseMemo;