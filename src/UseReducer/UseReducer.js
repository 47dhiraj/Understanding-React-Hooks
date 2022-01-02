import { useReducer } from "react";

// Basic Example of useReducer() for understanding the useReducer()

// useReducer is generally used to handle more complex state  becuase useReducer use garda code badi nai lekhna parcha (like dispatch() call and reducer() method to update state and update the return state).. so simple khalko state cha vani tw useState hook ko nai use garcha.. 

// useReducer() hook is used to initialize the state, take the current state and update the value of state based on action type sent to the reducer function. 


const ACTIONS = {                       // jati pani action haru cha sabailai kunai auta object banayera tes vitra rakheko
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action)                             // yo chai reducer function ho, which takes two parameter (i.e current state and action) and it returns the updated state       // dispatch() function call garda it automatically calls the reducer
{   
    switch (action.type) 
    {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }                       // updating(incrementing) the count value 
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }                       // updating(decrementing) the count value 
        default:
            return state
    }

}


const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 } )    // we call dispatch function in order to call reducer function  for updating the state       // reducer function returns the new updated state  // Syntax of useReducer() ==> useReducer(reducer_function, initial_state_value)       // useReducer() hook returns an array.


    function increment()                                            
    {
        dispatch({ type: ACTIONS.INCREMENT })                             // calling dispatch function by passing the parameter (like action type), which automatically calls the reducer function.
    }

    function decrement() 
    {
        dispatch({ type: ACTIONS.DECREMENT })                             // calling dispatch function by passing the parameter (like action type), which automatically calls the reducer function.
    }


    return (
        <> 
            <button onClick={decrement} > - </button>
            <span> {state.count} </span>
            <button onClick={increment} > + </button>
        </>
    );
}
 
export default UseReducer;