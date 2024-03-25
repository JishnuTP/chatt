import React from 'react'
import "./Style.css"
import Sidebar from './Sidebar'
// import WorkArea from './WorkArea'
import ChatArea from './chatArea'

function MainContainer() {
    return (
        <div className="main-container">
            <Sidebar/>
            {/* <WorkArea/> */}
            {<ChatArea/>}
               </div>
        
    )
}

export default MainContainer
