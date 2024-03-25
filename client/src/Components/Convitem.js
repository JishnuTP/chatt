import React from 'react'
import "./Style.css"
function Convitem({props}) {
    return (
        <div className='conv-container'>
            <p className='con-icon'>{props.name[0]}</p>
            <p className='con-title'>{props.name}</p>
            <p className='con-lastMessage'>{props.lastMessage}</p>
            <p className='con-timeStamp'>{props.timeStamp}</p>
            
        </div>
        
    )
}

export default Convitem
