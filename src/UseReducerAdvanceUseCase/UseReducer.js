import { useState, useReducer } from "react";
import Todo from "./Todo";

// Complex state object example ==> Todos Example.
// Advance example.

export const ACTIONS = {                            // kunai data or data structure lai arko component page ma pani access garnu cha vani yesari export garna sakincha           
   ADD_TODO: 'add-todo',
   TOGGLE_TODO: 'toggle-todo',
   DELETE_TODO: 'delete-todo'
}

// Basically reducer function le, different khalko event lai handle garne help garcha .. so sajilo vayo dherai event lai handle garne chutta chuttai handle method banayera alag alag code lekhna parena... 
function reducer(todos, action)                             
{   
    switch (action.type) 
    {
        case ACTIONS.ADD_TODO:
            return [...todos, { id: Date.now(), name: action.payload.name, complete: false } ]
            // return [...todos, newTodo(action.payload.name) ]                   // newTodo() le newTodo vanni function lai call gareko
        
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {

                if (todo.id === action.payload.id ) 
                {
                    return { ...todo, complete: ! todo.complete }               // ...todo vannale specific single todo object lai spread gareko and complete property ko vlaue tyakka ulto garera update gareko
                }
                
                return todo                                     // yo return chai mathi ko if ko else part ko return ho
            })
    
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id )     // todo.id match vayo vani, tyo particular todo object lai todos array batw remove garcha

        default:
            return todos 
    }
}


// function newTodo(name) 
// {
//     return { id: Date.now(), name: name, complete: false }      // auta object return gareko, jasma id, name & complete property haru chan
// }



const UseReducer = () => {

    const [todos, dispatch] = useReducer(reducer, [] )          // initialize gareko value chai empty array .. pachi yo array vitra objects haru pani add garna sakincha
    const [name, setName] = useState('')


    function handleSubmit(e) 
    {
        e.preventDefault()                          // preventing the default submitting behaviour of form (i.e page refresh hudaina)

        dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} })        // yo dispatch function will automatically call the reducer() function       // yo payload pani reducer ko action parameter mai gari rakcha

        setName('')                                 // setting the name back to empty string
    }

    return (
        <> 
            <form onSubmit = { handleSubmit } >
                <input type="text" value={name} onChange={e => setName(e.target.value) } />
            </form>

            {
                todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch} />       // dispatch={dispatch} chai k gareko vanda, passing function as props from child to parent component.              
                })
            }
        </>
    );
}
 
export default UseReducer;


