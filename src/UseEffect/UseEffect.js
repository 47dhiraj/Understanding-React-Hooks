import { useState, useEffect } from "react";

// useEffect() ko use ==> Anytime u want to have side effect occur, whether component mount, unmount, state changes or props changes and you want to do something, then u need to use useEffect()

// useEffect() ==>  we can use useEffect() hook to fetch data or for any authentication service, & these things are known as side effects in react.

// the code inside the useEffect() is may be executed every time the component render or the specific dependency state update or changes.


const UseEffect = () => {

    console.log('Component Rendering')

    const [resourceType, setResourceType] = useState('posts')           // OR  useState('nothing')

    const [items, setItems] = useState([])              // useState([]) yo vaneko by default empty array set gareko value


    // // 1st way : without using state dependency (ie []) ,,, harek choti component render huda yo hook vitra ko code execute huncha
    // useEffect(() => {
    //     console.log('Rerendering, useEffect hook running')
    // })


    // // 2nd way: using [] ,  just one time i.e first render ma matra useEffect() hook vitra ko code execute garcha ... tespachi rerender ma execute gardaina 
    // useEffect(() => {
    //     console.log('Initial Rendering')
    // }, [])                       // [] le mounting or intial rendering vanne bujaucha


    // 3rd way : using state dependency (i.e [state]) ... particular state change huda matra yo useEffect() hook vitra ko code execute huncha
    useEffect(() => {
        
        console.log('Resource Type changed !')

        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(data => setItems(data))

        // console.log(items)

    }, [resourceType])


    return (
        <>
            <div>

                <button onClick={() => setResourceType('posts')}> Posts </button>
                <button onClick={() => setResourceType('users')}> Users </button>
                <button onClick={() => setResourceType('comments')}> Comments </button>

            </div>

            <h1>{resourceType}</h1>

            {

                items.map(item => {
                    return <pre key={item.id}> { JSON.stringify(item) } </pre>       // JSON.stringify(item) yo kina gareko vanda, object lai string ma convert gareko
                })
            }
        </>
    );
}
 
export default UseEffect;