# Norris

The task is to create a simple client for Auth0's [Authentication Sample](https://github.com/auth0-blog/nodejs-jwt-authentication-sample) backend.

First clone the [Authentication Sample](https://github.com/auth0-blog/nodejs-jwt-authentication-sample) repo and launch it using `node server.js` or `nodemon server.js`. You can use Postman to connect to the `/users` and `/api/protected/random-quote` routes. When your requests are working correctly in Postman, you can use the automatically generated code as inspiration for your own JavaScript implementation.

## Your mission:

Write the JavaScript that will:

1. Hide and Show the password when the appropriate button is clicked
2. Read in the values from the `input#username` and `input#password` elements
3. Make a POST request to `/users` route of the backend, sending a JSON object in the Header. The JSON object should have the format: `{ "username": <string>, "password": <string>`
4. Retrieve the `access_token` value from the response to the POST request
5. Send a GET request to `/api/protected/random-quote`, along with the `access_token` in the Header.
6. Retrieve the response from the GET request and display it in the `<p>` element.
