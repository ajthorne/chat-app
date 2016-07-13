import $ from 'jquery';
import user1 from '../models/session';
import renderMessage from './newmessage';
import deleteItem from '../models/delete';

function renderChat() {
    let chatScreen = $(`<div class="chat-screen">
    <h2 class="chat-title">Conversation History</h2>
    <ul class="chat-container">
    </ul>
    </div>
    `);
    //main chat container

    let newMessageArea = $(`<div class="msg-area">
        <form>
        <input class="new-msg" type="text" placeholder="Enter new message" />
        <input class="msg-btn" type="button" value="+" />
        </form>
        </div>`);
        //adding new message area

    $('.container').empty().append(chatScreen);
    $('.container').append(newMessageArea);
    //appending each to the container specified in html

    $.ajax({
      //GET request to load previously stored messages into the DOM
        type: 'GET',
        dataType: 'json',
        url: 'https://tiny-za-server.herokuapp.com/collections/amandachat',
        success: function(response) {
            // console.log(response);
            response.forEach(function(msg, i, arr) {
                // console.log(msg);
                let chatMsg = $(`<div class="chat-area"><li class="msg-sender">${msg.sender}</li>
      <li class="msg-time">${msg.timestamp}</li>
      <li class="msg-body">${msg.body}</li>
      <input class="delete" type="button" value="Delete" data-id='${msg._id}'></div>`);
                console.log(msg._id);
                chatScreen.append(chatMsg);
            });
            $('.delete').on('click', deleteItem);
            //event listener for delete button, which also runs delete ajax request
        }
    });
    $('.msg-btn').on('click', renderMessage);
    //event listener for adding new message, which also runs a post ajax request 
}

export default renderChat;
