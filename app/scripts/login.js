import $ from 'jquery';
import user1 from './session';
import renderChat from './chat';

let loginFunction = $('.login').on('click', function() {
  user1.username = $('.name').val();
  console.log(user1);
  $('.login-screen').addClass('hidden');
  renderChat();
  });

  export default loginFunction;
