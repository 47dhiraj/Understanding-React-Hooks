import { ACTIONS } from './UseReducer'

export default function Todo({ todo, dispatch }) 
{
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }} > {todo.name} </span>

            {/* event jati lai yesari dispatch() garna sakincha*/}
            
            <button onClick ={ () => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} }) }> Toggle </button>

            <button onClick ={ () => dispatch({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id} }) }> Delete </button>

        </div>
    )
}
