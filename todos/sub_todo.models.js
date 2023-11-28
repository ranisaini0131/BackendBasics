import mongoose from "mongoose";

const sub_TodoSchema = new mongoose({
    title: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: true
    }
},
    {
        timestamp: true
    })

export const sub_Todo = mongoose.model("sub_Todo", sub_TodoSchema);