import React, { useRef } from "react";
import "./subChat.css"

function SubChat(props){
    const message = useRef(null);
    const m = props.user.state.nickName;
    const us = props.user;
    const sendTextMessage = function (type){
        const msg = message.current.value;
        props.logDB.newMessage({type,msg,us});
    }
    
            return (
                <div className="container">
                        <h1 className="h3 mb-3">Messages</h1>
                        <div className="row">
                        <div className="col-3">
                            <h2>Contacts</h2>
                            <p>Contacts</p>
                        </div>
                            <div className="col-9">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{m}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Online</h6>
                                </div>
                                    <div className="chat">
                                        <h6 className="message">no new messages.</h6>
                                    </div>
                                    <div className="align-bottom">
                                        <input className="TypeBar" type="text" ref={message} placeholder={"type a message"}/>
                                        <button className="Send" onClick={() => sendTextMessage('text')}>send</button>
                                        <button type="button" className="Options" data-bs-container="body" data-bs-toggle="popover"
                                                data-bs-placement="top" data-bs-content="Top popover"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                    );
}
export default SubChat;

//{props.logDB.render({userName:t})}
