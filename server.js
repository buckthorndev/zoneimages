const express = require('express')
const cors = require('cors');
const bodyparser = require('body-parser')
const player = require('./routes/player');
let PORT = process.env.PORT || 8080;

var app = express();
app.use(bodyparser.json());
app.use(cors());

app.use('/api/v1/images/players/',player)

app.get('/',(req,res)=>{
	res.send({status: 1,message: "Server is running"})
})

app.listen(PORT,()=>{
	console.log('Server running!')
})
