import { useState, useRef } from "react";

// Example for understanding most popular use case of useRef() is that it is commonly used to reference html or dom element on your web page.


const UseRef = () => {

    const [name, setName] = useState('')            

    const inputRef = useRef()

    function text_focus()                
    {

        // console.log(inputRef.current)

        inputRef.current.focus()        // yo line ko focus() chai JavaScript focus method ho, which is used to give focus to a html element.

    }

    return (
        <>              

            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value) } />            {/* JSx ko element of html element lai reference dina sakincha using ref attribute and useRef() */}
            <div> This is {name} </div>
            
            <button onClick={text_focus}>Focus to Click</button>
        </>
    );
}
 
export default UseRef;