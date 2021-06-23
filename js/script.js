"use strict";

let access_token; // Could be saved in localStorage

const user = document.getElementById("username");
const pass = document.getElementById("password");
const toggle = document.getElementById("toggle-password");
const submit = document.getElementById("submit");
const getJoke = document.getElementById("get-joke");
const showJoke = document.getElementById("show-joke");


toggle.addEventListener("click", togglePassword, false);
submit.addEventListener("click", createNewUser, false);
getJoke.addEventListener("click", getTheJoke, false);


function togglePassword() {
  if (pass.type === "password") {
    pass.type = "text";
    toggle.value = "Hide";
  } else {
    pass.type = "password";
    toggle.value = "Show";
  }
}


function createNewUser() {
  const username = user.value;
  const password = pass.value;

  // <<< Copied from Postman, then edited
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // <<< EDITED
  var raw = JSON.stringify({
    username,
    password
  });
  // EDITED >>>

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:3001/users", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      // <<< EDITED
      // console.log(result)
      try {
        const json = JSON.parse(result);
        access_token = json.access_token;
        getJoke.disabled = false;
        console.log("access_token:", access_token);
        // EDITED >>>
      } catch (error) {
        console.log("JSON error:", error);
      }
    })
    .catch((error) => console.log("error", error));
  // Copied from Postman >>>
}


function getTheJoke() {
  // <<< Copied from Postman, then edited (raw removed)
  var myHeaders = new Headers();
  // <<< EDITED
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  // EDITED >>>

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch("http://localhost:3001/api/protected/random-quote", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      // <<< EDITED
      // console.log(result)
      showJoke.innerText = result;
      // EDITED >>>
    })
    .catch((error) => console.log("error", error));
  // Copied from Postman >>>
}
