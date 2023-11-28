import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    numbrOfDocters: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Docter"
        }
    ],

    numberOfPatience: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patience"
        }
    ],

    openingHours: {
        type: String
    },
    specializedIn: [
        {
            type: String
        }
    ]
},
    {
        timestamps: true
    })

export const Hospital = mongoose.model("Hospital", hospitalSchema)