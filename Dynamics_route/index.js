import express from 'express';
const app = express()

app.get("/",(req, resp)=>{
    const users = ['Nishan','Suyog','Sandesh','Swaroop']
    let data = `<ul>`;
    for(let i= 0; i<users.length;i++){
        data += `<li> Open <a href="/user/${users[i]}">${users[i]}</a> Page</li>`
        console.log(users[i])
    }
    data += `</ul>`
    resp.send(data)
})
app.get("/user/:name",(req, resp)=>{
    const userName = req.params.name;
    resp.send(`This is ${userName} profile page`)
})

app.listen(3900)