import $ from 'jquery';
import login from './views/login';
import chat from './views/chat';
//views pages to load

function router() {
  let hash = location.hash;

  if (hash === '#login') {
    $('.container').empty().append(login);
  } else if (hash === '#chat') {
    $('.container').empty().append(chat);
  }
}

export default router;
