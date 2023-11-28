import mongoose from "mongoose";

const docterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    specialist: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    experienceInYears: {
        type: Number,
        default: 0
    },

    phoneNumber: {
        type: Number,
        required: true
    },

    worksInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }

},
    {
        timestamps: true
    })

export const Docter = mongoose.model("Docter", docterSchema)
