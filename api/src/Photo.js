import React from 'react'

const Photo = ({user,image}) =>{
    return(
        <div key="uniqueId1">
                <h1>{user}</h1>
                <img src={image}/>
                
        </div>
    )
}

export default Photo