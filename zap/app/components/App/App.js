/**
 * Created by jahansj on 13/12/2016.
 */
import React, { Component } from 'react';
import s from './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: [ ]
    }
  }
  
  elementify(message) {
    return (
        <span className={s.message}>
          { 
            message
          }
        </span>
    );
  }

  componentDidMount() {
    const self = this;

    socket.on('zapMessageRelay', (socket) => {
      const newMessage = this.elementify(socket);
      const messages = [newMessage, ...this.state.messages];

      this.setState({ messages });
    });
    
    document.getElementById('messageSubmit').addEventListener('click', (e) => {
      const message = document.getElementById('messageInput').value;
      
      socket.emit('zapMessage', message);
    });
  }
  
  render() {
    return (
        <div className={s.container}>

          <div className={s.inputBox}>
            <input id="messageInput" type="text"/>
            <button id="messageSubmit">Submit</button>
          </div>

          <div className={s.messageBox}>
            {
                this.state.messages
            }
          </div>
        </div>
    )
  }
}