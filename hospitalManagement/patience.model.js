import mongoose from "mongoose";

const patienceSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    diagonedWith: {
        type: String,
        required: true
    },

    address: {
        type: String,

    },

    age: {
        type: Number,
        required: true
    },

    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },

    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }

},
    {
        timestamps: true
    })

export const Patience = mongoose.model("Patience", patienceSchema)