# Norris

The task is to create a simple client for Auth0's [Authentication Sample](https://github.com/auth0-blog/nodejs-jwt-authentication-sample) backend.

First clone the [Authentication Sample](https://github.com/auth0-blog/nodejs-jwt-authentication-sample) repo and launch it using `node server.js` or `nodemon server.js`. You can use Postman to connect to the `/users` and `/api/protected/random-quote` routes. When your requests are working correctly in Postman, you can use the automatically generated code as inspiration for your own JavaScript implementation.

## Your mission:

Write the JavaScript that will:

1. Read in the `value`s from the `input#username` and `input#password` elements
2. Make a POST request to `/users` route of the backend, sending a stringified JSON object in the Header. The JSON object should have the format: `{ "username": <string>, "password": <string> }`
3. Retrieve the `access_token` value from the response to this POST request. The response will be a string. You will need to convert the token back into a JSON object before you can access its members (`id_token` and `access_token`).
4. Save the `access_token` in a variable which will be accessible to all the functions in your script.
5. Send a GET request to `/api/protected/random-quote`, along with the `access_token` in the Header.
6. Retrieve the response from the GET request and display it in the `<p>` element.

Bonus:
7. Hide and Show the password when the appropriate button is clicked. To do this, you simply need to toggle the `type` of the `<input>` element for the password between `"password"` and `"text"`.

Remember that you can use Postman to send the appropriate POST and GET requests, and that you can use the `Code` or `</>` button to the right of your request, to discover a snippet written in JavaScript that you can modify to suit your project.
