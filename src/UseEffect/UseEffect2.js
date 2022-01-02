import { useState, useEffect } from "react";
   
const UseEffect2 = () => {

    const [resourceType, setResourceType] = useState('posts')           // OR  useState('nothing')

    const [items, setItems] = useState([]) 

    useEffect(() => {
        
        console.log('Resource Type changed !')

        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(data => setItems(data))

        
        return () => {                              // Cleanup of useEffect     // yo return function ko help batw useEffect() vitra ko code jun last time run vayeko thyo teslai cleanup gareko ho.. so this return function code executes at first than actual code inside useEffect() hook
            console.log('Return from resource change')
        }

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
                    return <pre key={item.id}> { JSON.stringify(item) } </pre>       
                })
            }
        </>
    );

}
 
export default UseEffect2;