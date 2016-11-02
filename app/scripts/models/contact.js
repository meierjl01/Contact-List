import Backbone from 'backbone';
import $ from 'jquery';
import config from '../config';

export default Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastNmae: '',
    nickname: '',
    phoneNumber: '',
    address: ''
  }
});
