const asyncHandler=require('express-async-handler')


//@get the goals
//@route Get/api/goals
//@access Private


const getGoals= asyncHandler(  async (req,res)=>{

    
    res.status(200).json({message:' Get goals'})
})

//@set the goals
//@route POST/api/goals
//@access Private


const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a new field')
    }
res.status(200).json({message:'set goals'})
})

//@update the goals
//@route PUT/api/goals
//@access Private


const updateGoals= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update goal ${req.params.id}`})
})

//@delete the goals
//@route Delete/api/goals
//@access Private


const deleteGoals=asyncHandler(async(req,res)=>{
res.status(200).json({message:`delete goal ${req.params.id}`})
})




// const getGoals=(req,res)=>{
//     res.status(200).json({message:' Get goals'})
// }

module.exports={
    getGoals,setGoal,updateGoals,deleteGoals
}