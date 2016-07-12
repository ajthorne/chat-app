import $ from 'jquery';
import user1 from './session';
import deleteItem from './delete';

let renderChat = function() {
  console.log(user1);
  $('.chat-screen').removeClass('hidden');
$.ajax({
  type: 'GET',
  dataType: 'json',
  url: 'https://tiny-za-server.herokuapp.com/collections/amandachat',
  success: function(response) {
    console.log(response);
    response.forEach(function(item, i, arr) {
      console.log(item);
      // console.log(item._id);
      const li = $('<li></li>');
      const deleteButton = $('<input class="delete" type="button" value="Delete">');
      li.text(item.sender + ' ' + item.timestamp + ':' + ' ' + item.body);
      $('.chat-container').prepend(li);
      li.append(deleteButton);

      deleteButton.on('click', function() {
        $(li).hide();
        console.log(item._id);
        deleteItem(item._id);
      });
    });
  }
});
};
export default renderChat;
