import { useState } from "react";
// Note : useState() hook is used for setting the initial value of state , used for updating or changing the value of state . When the state value gets update, it helps to rerender the template to show the updated value.

// Example of useState, for working with single state


// countInitial() vanni function lai main function (UseState) vanda bahira pani define garna sakinthyo, and UseState main function vitra pani access garna pani sakincha

const UseState = () => {

    // Various ways of setting the initial value of state

    // Good way : 1st way of setting the initial value of state directly
    const [count, setCount] = useState(0)                   // useState(value)  garyo vani, every time component rerender huda value set hune code run vai rakhya huncha .. which is not so good // yo line ko count chai state ho & setCount method for update the count state value .. // useState(0) vaneko chai count vanni state ko initial value lai 0 set gareko


    // Better way : 2nd way of setting the initial value of state in functional way
    // Another way(Function way) of setting the state initial value ... yesto tarikale, component rerender huda khera state ko value set hune code run hudaina, just suru ma ek choti matra run huncha .. which is good .. time badi khadaina
    // const [count, setCount] = useState(() => {
    //     return 0                                    // yesari value return garera initially set garna pani sakincha
    // })


    // Better way : 3rd way(Advance way) of setting the initial value of state, by calling a custom function
    // function countInitial() {
    //     return 0
    // }
    // const [count, setCount] = useState(() => countInitial())            // anonymous function vitra batw countInitial() function lai call gareko

    




    // Various ways of updating the value of state

    // yesle kaam tw garcha,, but this is incorrect way to update the value
    // function decrementCount() {
    //   setCount(count - 1)
    // }
  
    // Correct way to update value by using previous state value
    function decrementCount() {
        setCount((prevCount) => prevCount-1)                // SYNTAX ==> updatingmethod((prevState) => prevState - 1) // setCount ko functional way ma use garda kheri.. prevState ko syntax use garna sakincha.. so this is the best way to do
    }
  
  
    // yesle kaam tw garcha,, but this is incorrect way to update the value
    // function incrementCount() {
    //   setCount(count + 1)
    // }

    // Correct way to update value by using previous state value
    function incrementCount() {
      setCount((prevCount) => prevCount + 1)                  // SYNTAX ==> updatingmethod((prevState) => prevState + 1)
    }
  

    return (
      <>
  
      <button onClick={decrementCount}> - </button>
      <span> {count} </span>
      <button onClick={incrementCount}> + </button>
  
      </>
  
    );

}
 
export default UseState;
