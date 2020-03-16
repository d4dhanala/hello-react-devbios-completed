import React from 'react'
import DeveloperBio from './DeveloperBio'

function DisplayBios(props){
    return (
        props.developers.map(
            (dev) => <DeveloperBio  developer={dev} key={dev.id}  />
        )
    );
}

export default DisplayBios

