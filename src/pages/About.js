import React from 'react'
 import ContainerFirebase from '../firebase/ContainerFirebase'


function About() {
    return (
        <div className="pt-4 mt-4 container text-center">
            <h1 className="m-4 p-3">PokeApi VH</h1>
           
            <ContainerFirebase />
           
        </div>
    )
}

export default About
