import Backbone from 'Backbone';
import $ from 'jquery';

export default function(session) {
  const nav = $(`
      <nav>
        <a href="#login">Log In</a>
        <a href="#register">Register Now</a>
    `);
    return nav;
}
