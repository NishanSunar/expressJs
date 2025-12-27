import express from 'express'
import path from 'path'
const app = express()
const __dirname = path.resolve()

app.get("/",(req, resp)=>{
    
    resp.sendFile(path.join(__dirname,"Html_rendering/home.html"));
})
app.get("/login",(req, resp)=>{
    resp.sendFile(path.join(__dirname,"Html_rendering/login.html"));
})
app.post("/submit",(req, resp)=>{
    resp.send("<h1>Data submitted</h1>");
})

app.listen(5600)