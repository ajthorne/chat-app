import $ from 'jquery';
import Session from './session.js';
import user1 from './session';
import moment from 'moment';

function Message(username) {
  this.timestamp = moment().format('MMM DD YY, h:mm:ss a');
  this.sender = username;
  this.body = $('.new-msg').val();
}
// console.log(message1);

// Message.prototype.save = function() {
// };
//

export default Message;
