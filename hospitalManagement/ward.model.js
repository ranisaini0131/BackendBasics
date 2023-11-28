import mongoose from "mongoose";

const wardSchema = new mongoose.Schema({

    wardNumber: {
        type: String,
        required: true
    },

    numberOfPatienceInWard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patience"
    },

    doctersInWard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Docter"
    }

},
    {
        timestamps: true
    })

export const Ward = mongoose.model("Ward", wardSchema);