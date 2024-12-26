const mongoose =require('mongoose')

const connectDatabase =()=>{
    mongoose.connect(process.env.DB_URl).then(()=>
    {
        console.log('mongoose connected to host')
    })

};
module.exports = connectDatabase;