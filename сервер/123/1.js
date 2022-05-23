const fs =require("fs");
const axios = require("axios");
new Promise((resolve,reject))
const { errorFromList } = require("error");
const { resolve } = require("path/posix");
axios.get()
.then(res => {
    const json= JSON.stringify(res.data);
    fs.writeFile(odos.json,json,(error)=>{
        if(err)return console/errorFromList(err);

        resolve()
        console.log("data writed");
    })
})
.catch(reject)