import $ from 'jquery';
import moment from 'moment';

function Message(username) {
  this.timestamp = moment().fromNow();
  this.sender = username;
  this.body = $('.new-msg').val();
}

export default Message;
