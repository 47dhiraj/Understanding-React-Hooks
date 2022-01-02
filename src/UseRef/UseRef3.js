import { useState, useEffect, useRef } from "react";

// Most imp use case of useRef() ==> it is used to persist or hold the values betwween the render of component.

// useRef() doesn't cause additional unnecessary rerender of component even if the state value changes .. so yei features le garda kheri, useRef() ko variable or state le updated value store gare pani, component render nagari vayera,, front end or DOM ma older value lai display garna sakincha

const UseRef = () => {

    const [name, setName] = useState('')            

    const earlier_name = useRef('')


    useEffect(() => {

        earlier_name.current = name

        console.log('Name changed !')
        console.log(earlier_name.current)           // earlier_name ma chana tw updated name nai cha... but updated vako kura uttikherai DOM ma dekhaudaina, update vako kura dekhauna ko lagi it waits for another render of component.

    }, [name])


    return (
        <>              

            <input value={name} onChange={(e) => setName(e.target.value) } /> 

            <div> This is {name} and this used to be {earlier_name.current} </div>
            
        </>
    );
}
 
export default UseRef;