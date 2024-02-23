const express= require('express');
const app= express();

const path=require('path');

const seq = require('./util/database.js');
const  Signup= require('./models/signup.js');
const Expense= require('./models/expense.js');

app.use(express.json());
app.use(express.static('public')) 
app.use(express.static(path.join(__dirname, "views"))) 


const signuprouterFile= require('./routes/signuprouter.js');   
app.use(signuprouterFile);
const loginrouterFile = require('./routes/loginrouter.js');
app.use(loginrouterFile);
const expenseRouterFile= require('./routes/expense.js');
app.use(expenseRouterFile);

seq.sync()
.then(res=>
   { 
    app.listen(1053);  
})                               
.catch((e)=>{
   console.log(e)

})
