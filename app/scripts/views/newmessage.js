import $ from 'jquery';
import user1 from '../models/session';
import Message from '../models/message';
import renderChat from './chat';

function renderMessage() {
    let message1 = new Message(user1.username);
    //taken from message constructor
    $.ajax({
        url: 'https://tiny-za-server.herokuapp.com/collections/amandachat',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(message1),
        //message and its properties are sent to the api server
        success: function(msg) {
            console.log(msg);
            let newMessage = $(`<li class="msg-sender">${msg.sender}</li>
          <li class="msg-time">${msg.timestamp}</li>
          <li class="msg-body">${msg.body}</li>
          <input class="delete" type="button" value="Delete">`);
            setInterval(function() {
                $('.msg-area').prepend(newMessage);
            }, 2000);
            //chat is updated on site 2 seconds after it is sent to server
        },
        error: function(response) {
            console.log('your code is broken!!');
        }
    });
}

export default renderMessage;
