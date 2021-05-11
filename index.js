//server side

//importing
const { response } = require('express');
const express = require('express');
const mysql = require('mysql');
const app=express();
const path=require('path')
const bodyParser = require('body-parser');
const ejs=require('ejs')


//set ejs
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://localhost:5500/transfer/1");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//getting values
app.get('/customer',function(req,res){
    connection.query('SELECT * from clients',function(err,rows,fields){
        if(err) throw err;
        else{
            res.render('index',{
                title:'our clients',
                records:rows
            })
        }
    })
})
//getting transfer page
app.get('/transfer1',function(req,res){
    res.render('transfer',{
        pay:654397.76
    })
})
app.get('/transfer2',function(req,res){
    res.render('transfer',{
        pay:83675.4
    })
})
app.get('/transfer3',function(req,res){
    res.render('transfer',{
        pay:209734.8825
    })
})
app.get('/transfer4',function(req,res){
    res.render('transfer',{
        pay:10008.98
    })
})
app.get('/transfer5',function(req,res){
    res.render('transfer',{
        pay:20097578.9
    })
})
app.get('/transfer6',function(req,res){
    res.render('transfer',{
        pay:209908.87
    })
})
app.get('/transfer7',function(req,res){
    res.render('transfer',{
        pay:872543.99
    })
})
app.get('/transfer8',function(req,res){
    res.render('transfer',{
        pay:100000
    })
})
app.get('/transfer9',function(req,res){
    res.render('transfer',{
        pay:50000
    })
})
app.get('/transfer10',function(req,res){
    res.render('transfer',{
        pay:1003725
    })
})
//creating connection
var connection=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"onedance",
        database:"banking",
        port:"3306"
    }
)
connection.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("connected");
    }

})
//--------------------------------------------
const port= process.env.PORT || 5500;

app.listen((port),function (){
    console.log(`App is listening on ${port}`)
});

