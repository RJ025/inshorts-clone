const data = require('./constants/data')
const news = require('./model/newSchema');

const DefaultData = async()=>{
    try{
        await news.deleteMany()
        await news.insertMany(data)
        console.log('data imported successfully')
    } catch(err){
        console.log('error' , err.message)
    }
}

module.exports = DefaultData