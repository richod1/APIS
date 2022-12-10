const asyncHandler=require('express-async-handler')

const Goal=require('../model/goalModle')


//@get the goals
//@route Get/api/goals
//@access Private


const getGoals= asyncHandler(  async (req,res)=>{
const goals= await Goal.find()
    
    res.status(200).json(goals)
})

//@set the goals
//@route POST/api/goals
//@access Private


const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a new field')
    }

    const goal=await Goal.create({
        text:req.body.text
    })


res.status(200).json(goal)
})

//@update the goals
//@route PUT/api/goals
//@access Private


const updateGoals= asyncHandler(async(req,res)=>{

    const goal=await Goal.findById(req.params.id)
if(!goal){
    res.status(400) 
    throw new Error('Goal not found on earth')  
}
const updatedGoal= await Goal.findByIdAndUpdate(req.params.id, req.body,{
    new:true,
})

    res.status(200).json(updatedGoal)
})

//@delete the goals
//@route Delete/api/goals
//@access Private
const deleteGoals=asyncHandler(async(req,res)=>{

    const goal=await Goal.findById(req.params.id)
    if(!goal){
        throw new Error('Goal not deleted from earth')
    }
   await goal.remove()
    
res.status(200).json({id:req.params.id})
})




// const getGoals=(req,res)=>{
//     res.status(200).json({message:' Get goals'})
// }

module.exports={
    getGoals,setGoal,updateGoals,deleteGoals
}