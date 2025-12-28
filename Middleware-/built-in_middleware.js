import express from 'express';
import path from "path";

const dirname__ = path.resolve();
const app = express();

app.use(express.urlencoded({extended:false}))//Built-in Middleware

app.get('/',(req, resp)=>{
    resp.send("Home page");
})
app.get('/login',(req, resp)=>{
    resp.sendFile(path.join(dirname__,'Middleware-/form.html'));
})
app.post('/submit',(req, resp)=>{
    resp.send("Submit page");
    console.log("User details are: ",req.body)
})
app.listen(5600)