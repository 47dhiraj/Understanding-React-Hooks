import { useState, useEffect, useRef } from "react";

// Example for understanding the basic use case of useRef()

// useRef() is quite similar to useState() hook, except that, useRef() is seperated from component life cycle... i.e useRef() ko current property ko value change vaye pani component rerender hudaina.. but yedi useState() use gareko vaye state ko value change huda component rerender anyhow hunthyo.. so value change huda pani component rerender navaus vanna ko  lagi useRef() ko use garincha

// Suppose hamilai kahile kai hamilai, state ko value change vaye pani, feri component chai rerender navaos vanna ko lagi hamile useRef() hook ko use garchau

const UseRef = () => {

    const [name, setName] = useState('')            // Note : every time the state value changes the component is going to render or we can say rerender...

    const renderCount = useRef(1)                   // useRef() hook returns an object having property current (which looks like this => {current : value} )
    

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    return (
        <>              {/* yesto wrapper lai JSX fragment vanincha*/}

            <input value={name} onChange={(e) => setName(e.target.value) } />
            <div> This is {name} </div>
            <div>Component gets rendered {renderCount.current} times.</div>
        </>
    );
}
 
export default UseRef;