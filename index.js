// const express = require('express');// vanilla js
import express from 'express' //ecma script
import home, { contact } from './pages/home.js'
import about from './pages/about.js'
const app = express();

app.get("",(req, resp)=>{
    resp.send(home())
});

app.get("/about",(req, resp)=>{
    resp.send(about())
});
app.get("/contact",(req, resp)=>{
    resp.send(contact())
});
app.get("/services",(req, resp)=>{
    resp.send("<h1> This is services page </h1>")
});

app.listen(1200)