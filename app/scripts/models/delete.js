import $ from 'jquery';
import renderChat from '../views/chat';
import user1 from './session';

function deleteItem() {
    // console.log($(this).siblings('.msg-sender').text());
    let sender = $(this).siblings('.msg-sender').text();
    let id = $(this).attr('data-id');
    //taking information from forEach function on chat pages

    if (user1.username === sender) {
      $(this).parent().hide();

    $.ajax({
        type: 'DELETE',
        url: 'http://tiny-za-server.herokuapp.com/collections/amandachat/' + id,
        dataType: 'json',
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log('your delete code is broken!');
        }
    });
} else {
  console.log('You are not allowed to delete other\'s messages!');
}
}

export default deleteItem;
