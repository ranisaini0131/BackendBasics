import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true
    }
});


const addressSchema = new mongoose.Schema({
    locality: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
        enum: []
    },
    postalCode: {
        type: Number,
    }
})


const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    orderedItems: {
        type: [orderItemsSchema]
    },

    address: {
        type: [addressSchema]
    },

    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING"
    }


},
    {
        timestamps: true
    })

export const Order = mongoose.model("Order", orderSchema)