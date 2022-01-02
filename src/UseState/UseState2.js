import { useState } from "react";

// Example of useState, for setting multiple state in single useState()

const UseState2 = () => {

    const [state, setState] = useState({ count: 0, theme: 'red' }) 
    const count = state.count
    const theme = state.theme

    function incrementCount() {
        setState((prevState) => {
            return { ...prevState, count: prevState.count + 1}      // auta state lai update nagari just arko state lai matra update garnu cha vani yesari garna sakincha using spread operator (...prevState)   , spread operator ko help le pahilako states ko value ma, updated wala state ko value le override garna milcha
        })                 
    }


    function decrementCount() {
        setState((prevState) => {
            return { ...prevState, count: prevState.count - 1}      // auta state lai update nagari just arko state lai matra update garnu cha vani yesari garna sakincha using spread operator (...prevState)   , spread operator ko help le pahilako states ko value ma, updated wala state ko value le override garna milcha
        })   
    }


    return (
        <>
    
            <button onClick={decrementCount}> - </button>
            <span> {count} {theme} </span>
            <button onClick={incrementCount}> + </button>
    
        </>

    );
}
 
export default UseState2;