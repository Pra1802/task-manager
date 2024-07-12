const express=require('express')
const tasks=require('./routes/task')
require('dotenv').config()

const app =express()
const connectDB= require('./db/connect')
app.use(express.static('./public'))
app.use(express.json());
app.use('/api/v1/tasks',tasks)
const port=5000
const start= async () => {
      try {
        await connectDB(process.env.MONGO_URI);
        
      } catch (error) {
        console.log(error);
      }
};
    
start();
app.listen(port, () =>
          console.log(`Server is listening on port ${port}...`)
);

