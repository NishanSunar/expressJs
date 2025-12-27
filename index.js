const express = require('express');
const app = express();

app.get("",(req, resp)=>{
    resp.send("<h1> Hello word </h1>")
});

app.get("/about",(req, resp)=>{
    resp.send("<h1>This is about page!! </h1>")
});
app.get("/contact",(req, resp)=>{
    resp.send("<h1> This is contact page!! </h1>")
});
app.get("/services",(req, resp)=>{
    resp.send("<h1> This is services page </h1>")
});

app.listen(1200)