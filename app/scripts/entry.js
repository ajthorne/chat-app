import $ from 'jquery';
import router from './router';

$(window).on('hashchange', router);
//when url hash is changed, event is listened to

router();
