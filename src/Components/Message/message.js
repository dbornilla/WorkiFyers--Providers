import React, {useEffect, useState} from "react";

import './message.css'
import IconMessage from '../../Assets/images/messageicon.webp'
import IconUser from '../../Assets/images/sample-icon.png'

console.log(IconMessage)
const Message = () => {

    // Message Chat toggles
    const [show,setShow] = useState(false)
    const [chat,setToggle] = useState(false)

    // Message Chat inbox
    function sendMessage(message, itsMe) { // ...Mario
        var messageList = document.getElementById("message-list");
        
        var scrollToBottom = (messageList.scrollHeight - messageList.scrollTop - messageList.clientHeight < 80);
      
        var lastMessage = messageList.children[messageList.children.length-1];
        
        var newMessage = document.createElement("span");
        newMessage.innerHTML = message;
      
        var className;
        
        if(itsMe)
        {
          className = "me";
          scrollToBottom = true;
        }
        else
        {
          className = "not-me";
        }
        
        if(lastMessage && lastMessage.classList.contains(className))
        {
          lastMessage.appendChild(document.createElement("br"));
          lastMessage.appendChild(newMessage);
        }
        else
        {
          var messageBlock = document.createElement("div");
          messageBlock.classList.add(className);
          messageBlock.appendChild(newMessage);
          messageList.appendChild(messageBlock);
        }
        
        if(scrollToBottom)
          messageList.scrollTop = messageList.scrollHeight;
      }
      
        
      
    useEffect(() => {
        if(chat){
            var message = document.getElementById("message-input");
            message.addEventListener("keypress", function(event) {
                var key = event.which || event.keyCode;
                if(key === 13 && this.value.trim() !== "")
                {
                    sendMessage(this.value, true);
                    this.value = "";
                }
            });
          }
    });
    
      

    return(
        
        <div>

            <div className="btn-message">
                <img src={IconMessage} onClick={()=>setShow(!show)}></img>
            </div>

            {
                show?<div className="message-inbox">
                        <div className="message-head">
                            <h3> Messages </h3>
                            
                            <span class="close-head" onClick={()=>setShow(!show)}>&times;</span>
                        </div>
                        <div className="message-body">
                            <div className="message-cards">
                                <div className="message-box" onClick={()=>setToggle(!chat)}> 
                                    <div className="message-icon">
                                        <img src={IconUser}></img>
                                    </div>
                                    <div className="message-user">
                                        <p> Juan de la cruz</p>
                                    </div>
                                     
                                    <div className="message-time">
                                        <p>7:00</p>
                                    </div>
                                   
                                </div>
                                <div className="message-box"> 
                                    <div className="message-icon">
                                            <img src={IconUser}></img>
                                        </div>
                                        <div className="message-user">
                                            <p> Miguel de la cruz</p>
                                        </div>
                                        
                                        <div className="message-time">
                                            <p>14:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>:null

            }

            {
                chat?<div className="message-chat">
                        <div className="message-head">
                            <i className="arrow left" onClick={()=>setToggle(!chat)}></i>
                            <h3> Juan De la Cruz </h3>
                            
                            
                        </div>
                        <div className="message-body">
                            <section id="message-list">
                                
                            </section>
                            <div className="message-body-input">
                                
                                <input id="message-input" type="text" placeholder="Type a message..."></input>
                            </div>
                                
                            </div>
                </div>:null
            }

        </div>

    );
    
}

export default Message