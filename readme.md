# fetch-es6-class

`fetch-es6-class` is a "fancy" modern class wrapper for `fetch` if you do not need to support shitty ass browsers, `fetch` is yow option to go for and if your option is fetch then you need to:

```shell
$ npm i fetch-es6-class
```

Let's imagine we have a `UsersApi` class all we need to do is:
```javascript
import {Fetch} from "fetch-es6-class";

export class UserApi extends Fetch {

/**
 *
 * @param {object} credentials - User Credentials.
 * @param {string} credentials.username - username.
 * @param {string} credentials.password - password.
 *
 * */
    public login (credentials: LoginCredentials) {
        return this.post("http://www.mi-pagina-web.com/api/login",credentials,{"Content-Type","application/json","Accept","application/json"}).then(res => {
            if (res.status!==200) {
                throw new Error("some went wrong");
            }

            return res.json();
        })
    }
    /**
     * @param {object} credentials - user data.
     * @param {string} credentials.username - username.
     * @param {string} credentials.password - password.
     * @param {string} credentials.firstName - firstName.
     * @param {string} credentials.lastName - lastName.
     * @param {string} credentials.Email - Email.
     * */
    public register (credentials: RegisterCredentials) {
        return this.post("http://www.mi-pagina-web.com/api/register",credentials,{"Content-Type","application/json","Accept","application/json"}).then(res => {
            if (res.status!==210) {
                throw new Error("some went wrong");
            }

            return res.status;
        })
    }
    public getUserById (id: number) {
        return this.get(`http://www.mi-pagina-web.com/api/user/${id}`)
        .then(res => res.json())
    }
    public deleteUserById (id: number) {
        return this.delete(`http://www.mi-pagina-web.com/api/user/${id}`, {"Content-Type","application/json","Accept","application/json"})
    }
}
```
