import React from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function Chat(){
    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar></Avatar>
                <div className="chat__header_info">
                    <h3>Chat name</h3>
                    <p>Visto l'ultima volta</p>
                </div>
                <div className="chat__header_right">
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon></AttachFileIcon>    
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>
            
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">MIO NOME</span>
                    Messaggio
                    <span className="chat__timestamp"> {new Date().toUTCString()}</span>
                </p> 
                <p className="chat__message chat__receiver">
                    <span className="chat__name">MIO NOME</span>
                    Messaggio
                    <span className="chat__timestamp"> {new Date().toUTCString()}</span>
                </p> 
                <p className="chat__message">
                    <span className="chat__name">MIO NOME</span>
                    Messaggio
                    <span className="chat__timestamp"> {new Date().toUTCString()}</span>
                </p> 
            </div>

            <div className="chat__footer">
                <IconButton>
                  <InsertEmoticonIcon></InsertEmoticonIcon>
                </IconButton>
                <form>
                    <input placeholder="Scrivi un messaggio..." type="text"></input>
                    <button type="submit">Invia un Messaggio</button>
                </form>  
            </div>
        </div>
    );
}
export default Chat;