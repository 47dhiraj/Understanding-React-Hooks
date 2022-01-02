import { useState, useEffect } from "react";

const UseEffect3 = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // Event listener function
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }


    useEffect(() => {

        window.addEventListener('resize', handleResize)         // handleResize chai passing the function as a reference 
    
        return () => {                                          // yo return function chai, cleanup in useEffect gareko ho
            window.removeEventListener('resize', handleResize)  // yo line removes the event listener
        }

    }, [])                                                      // initial render or on mounting ma matra yo useEffect() hook execute garna ko lagi [] lekheko



    return (
        <div>
            {windowWidth}
        </div>
    );
    
}
 
export default UseEffect3;


