import { useState } from "react";

// Example of useState, for setting multiple state using multiple useState()

const UseState3 = () => {

    const [count, setCount] = useState(0) 
    const [theme, setTheme] = useState('No Color') 


    function incrementCount() {
        
        setCount((prevCount) => prevCount + 1)  
        setTheme('Green')
    }

    function decrementCount() {

        setCount((prevCount) => prevCount - 1)  
        setTheme('Red')
    }


    return (
        <>
            <button onClick={decrementCount}> - </button>
            <span> {count} {theme}</span>
            <button onClick={incrementCount}> + </button>
        </>
    );
}
 
export default UseState3;