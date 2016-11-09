import $ from 'jquery';

function contactForm (contacts, user) {
  let form = $(`
    <form class="newContact">
    <h2>Add a new contact:</h2>
    <input type="text" name="firstname" placeholder="First Name">
    <input type="text" name="lastname" placeholder="Last Name">
    <input type="text" name="nickname" placeholder="Nickname">
    <input type="text" name="email" placeholder="Email Address">
    <input type="text" name="phone" placeholder="Phone Number">
    <input class="submit" type="submit" value="Save">
    </form>
    `);
    form.on('submit', (e) => {
      e.preventDefault();
      const firstName = form.find('input[name="firstname"]').val();
      const lastName = form.find('input[name="lastname"]').val();
      const nickname = form.find('input[name="nickname"]').val();
      const email = form.find('input[name="email"]').val();
      const phone = form.find('input[name="phone"]').val();

      contacts.create({
        firstName,
        lastName,
        nickname,
        email,
        phone
      }, {
        success: (response) => {
          console.log('submitted new contact');
          alert('Contact has been saved!');
        }
      });
    });
    return form;
}
export default contactForm;
