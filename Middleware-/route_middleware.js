import express from 'express';
const app = express();

function age_check(req, resp, next){
    if(!req.query.age || req.query.age <18){
        resp.send("You are not allowed to access this page")
    }
    else{
        next();
    }
}

app.get("/",(req, resp)=>{
    resp.send("Home Page");
})
app.get("/login",(req, resp)=>{
    resp.send("Login Page");
})
app.get("/users",age_check,(req, resp)=>{
    resp.send("users Page");
})
app.get("/products",(req, resp)=>{
    resp.send("products Page");
})

app.listen(5600)