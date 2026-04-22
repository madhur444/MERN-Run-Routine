import Habit from "../models/habitModel.js";
export const createHabit = async(req,res)=>{
try {
    const{habitName} = req.body;
const habit = await Habit.create({
    habitName
})
res.status(201).json({message:"Habit created", habit})
} catch (error) {
    res.status(500).json({message:error.message})
}}
