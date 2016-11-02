import $ from 'jquery';

export default function(session) {
    const form = $(`
      <form class="register">
        <input class="email" type="Email" placeholder="email">
        <input class="password" type="Password" placeholder="password">
        <input class="confirmPassword" type="password"placeholder="Confirm Password">
        <input type="submit" value="Register Now">
       </form>
    `);

    form.on('submit', (e) => {
      e.preventDefault();
      const email = form.find('.email').val();
      const password = form.find('.password').val();
      const confirmPassword = form.find('.confirmPassword').val();

      if(session.validatePassword(password, confirmPassword)) {
        session.renderRegister(email, password);
      } else {
        alert('Sorry, your passwords don\'t match!');
      }
    });
    return form;
}
