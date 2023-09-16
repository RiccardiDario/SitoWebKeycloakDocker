import React from 'react';
import './Sidebar.css';
import SidebarChat from '../SideBarChat/SidebarChat';
import ChatIcon from '@mui/icons-material/Chat';
import {Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';


function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__header_left">
                    <Avatar src="data:image/png;base64,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"></Avatar>
                </div>
                <div className="sidebar__header_right">

                    <IconButton>
                        <DonutLargeIcon></DonutLargeIcon>
                    </IconButton>

                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>

                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__search_container">
                    <SearchIcon></SearchIcon>
                    <input type="text" placeholder="Cerca o inizia una chat"></input>
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
            </div>
        </div>
    )
}
export default Sidebar;