const express=require('express')
const router=express.Router()

const {getGoals, setGoal, updateGoals, deleteGoals} =require('../controller/goalsController')



router.route('/').get(getGoals).post(setGoal)

router.route('/:id').delete(deleteGoals).put(updateGoals) 

    
// router.put('/:id',updateGoals) 
    
// router.delete('/:id',deleteGoals)
    
    





module.exports=router