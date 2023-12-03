import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
        trim: true,
        index: true //for anabling searching 
    },
    email: {
        type: String,
        required: true,
        lowerCase: true,
        unique: true,
        trim: true,
    },

    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true

    },

    avatar: {
        type: String, //for stroing url, cloudinary url
        required: true
    },

    coverImage: {
        type: String
    },

    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],

    password: {
        type: String,
        required: [true, 'Password is required']
    },

    refreshTokens: {
        type: String
    }

},
    {
        timestamps: true
    })

userSchema.pre("save", async function (next) {
    //checking if password is modified or not, if modify then bcrypt it and not then next()
    if (!this.isModified("password")) return next();

    //encrypting password
    this.password = await bcrypt.hash(this.password, 10)
    next();
})


//checking password is correct or not
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            //payload
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            //payload
            _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);