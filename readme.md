# fetch-es6-class

`fetch-es6-class` is a "fancy" modern class wrapper for `fetch` if you do not need to support shitty ass browsers, `fetch` is yow option to go for and if your option is fetch then you need to:

```shell
$ npm i fetch-es6-class
```

## Methods
---
### **cacheFirst**

We first check if this url is already fetched if so, we just return it, else we trigger the **HTTP** request then we cached the result if it doesnt have an error.

#### **Required Parameters**
* url
* cacheName

#### **Optional Parameters**
* headers

#### **Request Type**
* GET
---

### **get**
The **HTTP GET** method requests a representation of the specified resource.
Requests using **GET** should only be used to request data *they shouldn't incude data*.

#### **Required Parameters**
* url

#### **Optional Parameters**
* headers


---
### **post**
The **HTTP POST** method sends data to the server. The type of the body of the request is indicated by the `Content-Type` header.
The difference between **PUT** and **POST** is that **PUT** is *idempotent*: **calling it once or several times successively has the same effect** *that is no side effect*, where successive identical **POST** may have additional effects, like passing an order several times.

A **POST** request is typically sent via an `HTML form` **and results in a change on the server.** In this case, the `content Type` is selected by putting the adequate string in the enctype attribute of the `form` element or the formenctype attribute of the `input` or `button` elements:

* **application/x-www-form-urlencoded:** the keys and values are encoded in key-value tuples separated by *&*, with a *=* between the key and the value. Non-alphanumeric characters in both keys and values are percent encoded: this is the reason why this type is not suitable to use with binary data (use multipart/form-data instead).
* **multipart/form-data:** each value is sent as a block of data ("body part"), with a user agent-defined delimiter ("boundary") separating each part. The keys are given in the Content-Disposition header of each part.
* **text/plain**.

#### **Required Parameters**
* url
* body

#### **Optional Parameters**
* headers

---
### **delete**
The **HTTP DELETE** request method deletes the specified resource.

#### **Required Parameters**
* url

#### **Optional Parameters**
* headers
___

### **put**
The **HTTP PUT** request method creates a new resource or replaces a representation of the target resource with the request payload.
The difference between **PUT** and **POST** is that **PUT** is idempotent: calling it once or several times successively has the same effect (that is no side effect), whereas successive identical **POST** requests may have additional effects, akin to placing an order several times.

#### **Required Parameters**
* url
* body

#### **Optional Parameters**
* headers
___
### patch
The **HTTP PATCH** request method applies partial modifications to a resource.
**PATCH** is somewhat analogous to the **update** concept found in `CRUD` (in general, **HTTP** is different than `CRUD`, and the two should not be confused).
A **PATCH** request is considered a set of instructions on how to modify a resource.
Contrast this with **PUT**; which is a complete representation of a resource.
A **PATCH** is not necessarily idempotent, although it can be.
Contrast this with **PUT**; which is always idempotent. The word **idempotent** means that any number of repeated, identical requests will leave the resource in the same state.
For example if an **auto-incrementing** counter field is an integral part of the resource,
then a **PUT** will naturally overwrite it (since it overwrites everything), but not necessarily so for **PATCH**.
**PATCH** (like **POST**) may have side-effects on other resources.

#### **Required Parameters**
* url
* body

#### **Optional Parameters**
* headers
---
## **Example**
Let's imagine we have a `UsersApi` class all we need to do is:
```typescript
import {Fetch} from "fetch-es6-class";

export class UserApi extends Fetch {

    /** Returns picture by given id **/
    getPicById (picId) {
        return this.cacheFirst(`https://www.mi-pagina-web.com/username/trollmon/pics/${picId}`)
        .then(res => {
            if (!res) {
                throw new Error("Not Such Pic or some")
            }

            return res.blob()
        })
    }

   /**
    *
    * @param {object} credentials - User   Credentials.
    * @param {string} credentials.username -   username.
    * @param {string} credentials.password -   password.
    *
    **/
    login (credentials) {

        return this.post("http://www.mi-pagina-web.com/api/login",
        credentials,{
            "Content-Type":"application/json",
            "Accept":"application/json"
        })
        .then(res => {
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
    register (credentials) {
        return this.post("http://www.mi-pagina-web.com/api/register",
        credentials,
        {
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization": "Bearer I_am_yow_token",
            "Cache-Control": "public, max-age=0"
        }).then(res => {
            if (res.status!==210) {
                throw new Error("some went wrong");
            }

            return res.status;
        })
    }

    /**
     * @param {number} id
     * */
    getUserById (id) {
        return this.get(`http://www.mi-pagina-web.com/api/user/${id}`)
        .then(res => res.json())
    }

    /**
     * @param {number} id
     * */
    deleteUserById (id: number) {
        return this.delete(`http://www.mi-pagina-web.com/api/user/${id}`, {
            "Content-Type":"application/json","Accept":"application/json"
        })
    }
}
```
