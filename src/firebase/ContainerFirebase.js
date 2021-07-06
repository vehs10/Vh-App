
import React, { useEffect, useState } from "react";
import { getFirestore } from './Firebase'

function ContainerFirebase() {
    const [item, Setitem] = useState([]);
    useEffect(() =>{
        const db = getFirestore();
        db.get()
        .then((response) => response.json())
        .then((response) =>{
          Setitem(response)
          console.log(response);
          console.log(item);
        })
      
      }, [])
    

    return (
        <div></div>
       
    )
        
   
}

export default ContainerFirebase

