import React, { useState } from 'react'
import "./Style.css"
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { IconButton } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import SearchIcon from '@mui/icons-material/Search';
import Convitem from './Convitem';

function Sidebar() {
    const [conversations,setConversations]=useState([
        { name:"test 1",
        lastMessage:"last message",
        timeStamp:"today"

    },
    { name:"test 2",
    lastMessage:"last message",
    timeStamp:"today"

},
{ name:"test 3",
lastMessage:"last message",
timeStamp:"today"

},
])
    return (
        <div className='sidebar-container'>

             <div className='sb-header'>
<div>
             <IconButton>
                <PersonPinIcon/>
                </IconButton>
                </div>
                <div>

                <IconButton>
                <PersonAddAltIcon/>
                </IconButton>

                <IconButton>
                <GroupAddIcon/>
                </IconButton>

                <IconButton>
                <AddCircleIcon/>
                </IconButton>

                <IconButton>
                <ShieldMoonIcon/>
                </IconButton>

                </div>
                
                
            
            </div>

            <div className='sb-search'>
                <IconButton>
                <SearchIcon/>
                </IconButton>
                
                <input placeholder='Search' className='search-box'/>    
            
            </div>


            <div className='sb-conv'>
                {conversations.map((conerssation)=>{
                    return <Convitem props={conerssation} key={conerssation.name}/>
                
                })}
               
            
            </div>


            </div>
        
    )
}

export default Sidebar
