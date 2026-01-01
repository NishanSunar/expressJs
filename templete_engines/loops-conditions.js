import express from 'express'

const app = express()
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get('/add-user',(req,resp)=>{
    resp.render('add-user')
});

app.post('/submit-user',(req, resp)=>{
    
    resp.render('submit-user',req.body)
});

app.get("/users",(req, resp)=>{
    const users =['Nishan','Suyog',"Suman","Swaroop"]
    const islogin = true;
    resp.render("users",{users:users, islogin:true})
})

app.listen(6700)