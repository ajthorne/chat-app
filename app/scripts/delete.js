import $ from 'jquery';
import renderChat from './chat';
import Message from './message';

function deleteItem(id) {
  $.ajax({
  type: 'DELETE',
  url: 'http://tiny-za-server.herokuapp.com/collections/amandachat'+ id,
  dataType: 'json',
  success: function (response) {
            console.log(response);
          },
  error: function (response) {
    console.log('your code is broken!');
  }
        });
      }
      // };

export default deleteItem;
