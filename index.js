const express =require("express")
const { Collection } = require("mongoose")
const app =express()
const path=require ("path")
const hbs=("hbs")
//const Collection=require("./mongodb")

const templatePath=path.join(__dirname,'../Templates')

app.use (express.json())
app.set("view engine","hbs")
app.set("views",templatePath)


app.get("/Login",(reg,res)=>{
res.render("Login")

})

app.get("/Signup",(reg,res)=>{
    res.render("signup")
    })

app.post("/signup",async(reg,res)=>{

    const data={
        name:reg.body.name,
        Password:reg.body.Password
    }

    await Collection.insertMany([data])
    res.render("home")
})

    app.listen(3000,()=>{
    console.log("Port Connected");
})
