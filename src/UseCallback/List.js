import { useState, useEffect } from "react";

// useCallback() hook also works as useMemo(), except useMemo() return vlue.. where as useCallback() return the function

const List = ({ getItems }) => {

    const [items, setItems] = useState([])


   useEffect(() => {

        setItems(getItems(1))              // UseCallback component ko getItems() vanni method call gareko

        console.log('Updating Items')

   }, [getItems])                           // getItems() function ko reference same cha vani yo useEffect vitra ko code run hudaina but function ko reference same chaina vani useEffect vitra ko code execute huncha.


   return items.map(item => <div key= {item} > { item } </div> )

}
 
export default List;