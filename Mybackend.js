const express = require('express')
const path = require('path')
const port = 80;
const app = express();
const fs = require('fs');
const { json } = require('express');
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => {
    res.status(200).render('Survey.pug')
})
app.post('/', (req, res) => {
    const  Form =req.body;
    const Name = req.body.FirstName;
    const stringg=JSON.stringify(Form);
    console.log(stringg)
   
const data=JSON.stringify(Form)
    console.log("Got Response", Form);
  fs.writeFileSync(`Storage/${Name}.txt`,`${stringg}`,()=>{
    console.log("written");
  });
})
app.listen(port, () => {
    console.log('Survey is conducting')
})

