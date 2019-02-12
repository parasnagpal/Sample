const express=require('express')
const app=express()

app.use("view engine","hbs")
 

app.post('/home',(req,res)=>{
     res.render('./ind.hbs')
})

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))


app.use('/',express.static(__dirname+'/views'))

app.listen(process.env.PORT)