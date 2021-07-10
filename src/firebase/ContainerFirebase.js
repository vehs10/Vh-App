
import React, { useEffect, useState } from "react";
import { getFirestore } from './Firebase'

function ContainerFirebase() {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("item");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log(" no hay resultados");
        }
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

    return (
        <div className="Card-style container p-4">
        <h3 className="text-center font-weight-bold p-4">Información Sobre Nosotros</h3>
        {item.length > 0 ? (
        item.map((data, index) => {
          return (
            <ul className="lista text-left">
              <li className="m-4"><span className="font-weight-bold">Nombre del Desarrollador:</span> {data.name}</li>
              <li className="m-4"><span className="font-weight-bold">Edad:</span> {data.age}</li>
              <li className="m-4"><span className="font-weight-bold">Empresa:</span> {data.business}</li>
              <li className="m-4"><span className="font-weight-bold">API utilizada para el desarrollo de la aplicación:</span> {data.Api}</li>
              <li className="m-4"><span className="font-weight-bold">Nuestro Objetivo:</span> {data.text}</li>
            </ul>
          );
        })
      ) : (
        <h3>Cargando...</h3>
      )}
        </div>


       
    )
        
   
}

export default ContainerFirebase

