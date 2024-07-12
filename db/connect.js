const mongoose=require('mongoose')
// const connection='mongodb+srv://Pranav:Pranav@2003@cluster0.ecrnnwx.mongodb.net/?retryWrites=true&w=majority'
const connectDB=(url)=>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
}

module.exports=connectDB
