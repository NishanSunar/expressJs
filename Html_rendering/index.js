import express from 'express'
import path, { dirname } from 'path'
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

app.use((req, resp)=>{
    resp.status(404).sendFile(path.join(__dirname,"html_rendering/404.html"))
})

app.listen(5600)