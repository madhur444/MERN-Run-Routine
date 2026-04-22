import mongoose, { Schema } from "mongoose";
const habitSchema = mongoose.Schema(
{
    habitName:{
        required:true,
        type: String,
        
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    ref:"User"
    },
    completedDates:[
        {
        type:Date,
    },
    ],
},{
    timestamps:true
}
)
export default mongoose.model("Habit",habitSchema)