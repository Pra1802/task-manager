const Task=require('../models/Task')

const getTasks=async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }
    


const addTasks=async(req,res)=>{
    
        const task = await Task.create(req.body)
        //var task = new Task({ name: req.body.name,completed:req.body.completed })
        res.json({task})

}
const getsingleTasks=async(req,res)=>{
    try {
        //const {id:taskID}=req.params
        const task= await Task.findOne({_id:req.params.id})
        res.json({task})
        
    } catch (error) {
        res.json({msg:'error'})
    }

}
const updateTasks=async(req,res)=>{
    try {
        const task=await Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        res.jason(task)
        
    } catch (error) {
        
    }

}
const deleteTasks=async(req,res)=>{
    const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  
  res.status(200).json({ task })

}
module.exports={
    getTasks,
    addTasks,
    getsingleTasks,
    updateTasks,
    deleteTasks,
}