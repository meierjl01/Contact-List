import Backbone from 'backbone';
import $ from 'jquery';
import config from '../config';
import router from '../router';

export default Backbone.Model.extend({
            defaults: {
                name: '',
                email: '',
                'user-token': ''
            },

            validatePassword(password, confirmPassword) {
                if (password.trim() && password === confirmPassword) return true;
                return false;
            },

            renderRegister(email, password) {
                this.save({
                    email,
                    password
                }, {
                    url: 'https://api.backendless.com/v1/users/register',
                    success: () => {
                      this.login(email, password);
                        router.navigate('contacts', {
                            trigger: true});
                    }
                }
            );
          },

          login(email, password) {
            this.save({login: email, password},
              {
                url: 'https://api.backendless.com/v1/users/login',
                success: (response) => {
                  this.set(response);
                router.navigate('contacts', {trigger: true});
              },
              error: () => {
                console.log('login did not work');
              }
            }
          );
        }


        });
