import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";

import io from "socket.io-client";


inject("store")
@observer
class Chat extends Component {
    @observable userChat = {
        userName: '',
        message: '',
    }
    @observable messages = []

    socket = io('localhost:8080');


    @action changeInput = (e) => {
         this.userChat[e.target.name] = e.target.value

    }
   
    sendMessage = (ev) => {
        ev.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
            username: this.userChat.userName,
            message: this.userChat.message
        });
    
    }

    componentDidMount = () =>{debugger;
        this.socket.on('RECEIVE_MESSAGE' ,(data) => {
            this.messages.push(data)
            
        })
    }
    
    

    

    @observable
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card-4">
                            <div className="card-body">
                                <div className="card-title">Online Chat</div>
                                <hr />
                                <div className="messages">
                                    {this.messages.map(message => {
                                        return (
                                            <div>{message.username}: {message.message}</div>
                                        )
                                    })}

                                </div>
                            </div>
                            <div className="card-footer">
                                <input type="text" name="userName" value={this.userChat.userName} onChange={this.changeInput} placeholder="Username" className="form-control" />
                                <br />
                                <input type="text" name="message" value={this.userChat.message} onChange={this.changeInput} placeholder="Message" className="form-control" />
                                <br />
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat