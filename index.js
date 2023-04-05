const express = require('express')
const app = express();
var port = 3000

app.listen(port,(err)=>{
    if (err) {
        console.error("internal server error");
        
    }
    else{
        console.log("server running on ",port);
    }
})
