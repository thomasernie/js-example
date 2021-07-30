var express = require('express');
var app = express();
const fetch = require("node-fetch");

async function getUsers() {
  let url = 'http://localhost:3011/student';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}
getUsers();