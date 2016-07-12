import $ from 'jquery';
import user1 from './session';
import Message from './message';


let newMessage = $('.msg-btn').on('click', function() {
  let message1 = new Message(user1.username);
$.ajax({
  url: 'https://tiny-za-server.herokuapp.com/collections/amandachat',
  type: 'POST',
  contentType: 'application/json',
  data: JSON.stringify(message1),
  success: function(response){
    console.log(response);
    console.log(response.body);
    const li = $('<li></li>');
    const deleteButton = $('<input class="delete" type="button" value="Delete">');
    li.text(response.sender + ' ' + response.timestamp + ':' + ' ' + response.body);
    $('.chat-container').append(li);
    li.append(deleteButton);
  },
  error: function(response){
    console.log('your code is broken!!');
  }
});
});

// this.timestamp = moment().format();
// this.sender = Session.username;
// this.body = $('.new-msg').val();
