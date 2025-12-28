import express from 'express';

const app = express();

function ageCheck(req, resp, next){
    if(!req.query.age || req.query.age<18){
        resp.send("Alert !, You can not access this page")
    }
    else{
        next()
    }
}
app.use(ageCheck)

app.get("/",(req, resp)=>{
    resp.send("Home page");
})
app.get("/login",(req, resp)=>{
    resp.send("Login page");
})
app.get("/admin",(req, resp)=>{
    resp.send("Admin page");
})
app.listen(9800)