const express = require('express'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 


const app = express(); 
app.use(bodyParser.json());

// Router

app.use('', express.static(path.join(__dirname, 'public')))

const port = 3200; 

app.listen(port, () => {
    console.log('App is running on port '+port)
})