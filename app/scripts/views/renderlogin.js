import $ from 'jquery';


export default function(session) {
  const form = $(`
    <form class="login">
      <input value="" type="email" placeholder="email">
      <input value="" type="password" placeholder="password">
      <input type="submit" value="Log In">
    </form>
    `);

    form.on('submit', function(e) {
      e.preventDefault();
      const email = form.find('input[type="email"]').val();
      const password = form.find('input[type="password"]').val();
    });
    return form;
}
