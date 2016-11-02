import Backbone from 'backbone';
import Contact from '../models/contact';

export default Backbone.Collection.extend ({
  url: 'https://api.backendless.com/v1/data/contacts',
  parse(data) {
    console.log(data);
    return data.data;
  }
});
