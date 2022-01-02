import { useState, useMemo } from "react";

// Example of useMemo() for caching the result of the function.

// yedi slow execute hune khalko function cha vani, performance benefit ko lagi vanera matra yo useMemo vanni function lai run garna sakincha
// useMemo() is used for caching the output or result of any function in the memory(RAM). Note: caching large things also may causes the performance overheads.
// useMemo() ko kaam generally, yedi kunai slow execute hune function cha vani, we know that state change huda componenet rerender huncha and feri tyo slow function execute huncha .. so useMemo() hook le tyo slow function ko output lai cache garera rakhcha,,, yedi slow function ko input same cha vani output pani same nai huncha so tyo cache ko value feri recalculate garnu parena because output will be the same.



const UseMemo = () => {

    const [number, setNumber] = useState(0)

    const [dark, setDark] = useState(false)

    const doubleNumber = useMemo(() => {
        return slowFunction(number)                         // yesari caching gareko function le return gareko output lai
    }, [number])                                            // [number] vaneko chai dependency ho, yedi number state ko value change vaye matra yo function component rerender huda re execute huncha ,, yedi number ko value change navaye execute hudaina.


    // inline styline dina ko lagi style object create gareko
    const themeStyles = {
        backgroundColor : dark ? 'black' : 'white',
        color : dark ? 'white' : 'black'
    }


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