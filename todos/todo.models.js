import mongoose from 'mongoose'
import { User } from './user.modes.js';

const todoSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    //array of sub todos
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "sub_Todo"
        }
    ]

},
    {
        timestamps: true,
    })

export const Todo = mongoose.model('TODO', todoSchema);
