import $ from 'jquery';
import user1 from '../models/session';
import renderChat from './chat';

let login = $(`<div class="login-screen">
      <form class="login-form">
			<h2>Login to start chatting</h2>
			<input class="name" type="text" placeholder="Enter your username" />
			<input class="login" type="button" value="Login" />
      </form>
		</div>`);
    //rendering elements to login page

    // console.log($login);

login.find('.login').on('click', function(evt) {
  evt.preventDefault();
  user1.username = $('.name').val();
  //name typed into input is stored as a variable to be used later
  console.log(user1);
  location.hash = '#chat';
  renderChat();
  //when login button is clicked, chat is rendered
  });

  export default login;
