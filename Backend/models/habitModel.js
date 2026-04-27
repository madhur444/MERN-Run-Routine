import mongoose from "mongoose";
const habitSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        completedDates:[
            {type:Date}
        ]
    },

    {timestamps:true}
)
export default mongoose.model("habit",habitSchema)