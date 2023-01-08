const mongoose = require("mongoose")

const connection = (URL)=>{


    try{
        mongoose.connect(URL , {useNewUrlParser : true , useUnifiedTopology : true})
                .then(()=>console.log('database connected'))
                .catch(err=>console.log(err))
    } catch(err){
        console.log('error while connecting database :' , err)
    }
}

module.exports = connection;