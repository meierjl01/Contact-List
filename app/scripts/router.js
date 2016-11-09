import Backbone from 'backbone';
import $ from 'jquery';
import secret from './config';
import Session from './models/session';
import Contact from './models/contact';
import Contacts from './collections/contacts';
import home from './views/home';
import renderContacts from './views/rendercontacts';
import renderLogin from './views/renderlogin';
import contactForm from '.views/rendernewcontact';
import renderRegister from './views/renderregister';

let session = new Session();
let contact = new Contact();
let contacts = new Contacts();
let container = $('.container');

// REMEMBER: Router must have ajaxSend so you don't have to type the header information for each ajax request

$(document).ajaxSend((evt, xhr, opts) => {
    console.log('ajaxSend');

    console.log(opts.type);

    xhr.setRequestHeader('application-id', secret.appId);
    xhr.setRequestHeader('secret-key', secret.secret);
    xhr.setRequestHeader('application-type', 'REST');
    if (session.get('user-token')) {
      xhr.setRequestHeader('user-token', session.get('user-token'));
    }
});

const Router = Backbone.Router.extend({
  routes: {
    ''              : 'home',
    'login'         : 'login',
    'register'      : 'register',
    'contacts'      : 'contacts',
    'contact/create': 'newContact'
  },

//do what we did in class today with the user-tokens. See if you can make it more DRY than how we did it this morning

  login(){
    // console.log('login page');
    if(session.get('user-token')){
      this.navigate('contacts', {trigger: true});
    } else {
      container.empty();
      container.append(renderLogin(session));
    }
  },

  home() {
    // console.log('home');
    if (session.get('user-token')) {
      this.navigate('contacts', {trigger: true});
    } else {
      container.empty();
      container.append(home(session));
    }
  },

  register() {
    // console.log('register page');
    if (session.get('user-token')) {
      this.navigate('contacts', {trigger: true});
    } else {
      container.empty();
      container.append(renderRegister(session));
    }
  },
  newContact() {
    container.empty();
    container.append(contactForm(contacts, session));
  },
  contacts() {
    container.empty();
    container.append(contactList(contacts, session));
  }

});

const router = new Router();

export default router;
