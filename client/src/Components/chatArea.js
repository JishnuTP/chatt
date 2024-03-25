import React from 'react'
import "./Style.css"
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
function ChatArea() {
    return (
        <div className='chatarea-container'>
            
<div className='chat-header'> 

            <p className='con-icon'>t</p>

            <div className='header-text'>

           
            <p className='con-title'>test</p>
           
            <p className='con-timeStamp'>online</p>
            <IconButton>
            <DeleteIcon/>
        </IconButton>
            </div>
            
            
     
        
        </div>
<div className='message-container'> message</div>
<div className='input-container'>
    <div className='sb-search'>
                <IconButton>
                <SendIcon/>
                </IconButton>
                
                <input placeholder='type here' className='search-box'/>    
            
            </div>
</div>

        </div>
        
    )
}

export default ChatArea
