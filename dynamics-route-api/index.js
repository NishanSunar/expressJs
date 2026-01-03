import express from 'express'
import userData from './users.json' with {type:"json"}
const app = express()

app.get("/",(req, resp)=>{
    
    resp.send(userData)
})

app.get("/user/:id",(req, resp)=>{
    const id = req.params.id
    let filteredData = userData.filter((user)=>user.id==id)
    resp.send(filteredData)
})
app.get("/username/:name",(req, resp)=>{
    const name = req.params.name
    let filteredData = userData.filter((user)=>user.name.toLowerCase() == name.toLowerCase())
    console.log(filteredData)
    resp.send(filteredData)
})
app.listen(9700)