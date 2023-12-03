import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js "

const registerUser = asyncHandler(async (req, res) => {

    //we get all froentend data in req = req.body(form and json data)

    //get user data from froentend
    const { username, email, fullName, password } = req.body
    console.log("username:", username)

    //validation
    if (
        [fullName, email, password, username].some((field) =>

            field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    // check for images, avatar
    const existedUser = User.findOne({
        $or: [{ email }, { username }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already existed")
    }

    // check for images, avatar
    //jese express req pr .body ka access deta h, vese hi multer .files ka access deta h

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    console.log("files", req.files)

    //check Image is uploaded or not
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    //upload them to cloudinary, avatar

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    //check avatar uploaded or not

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    //create User

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    //check user cresated or not
    const alreadyExistedUser = await User.findById(user._id).select(
        "-password -refreshToken" //this fields will not be in the db
    )

    if (!alreadyExistedUser) {
        throw new ApiError(500, "Something went wrong while registering user")
    }

    //return res
    return res.status(201).json(
        new ApiResponse(200, alreadyExistedUser, "User registered successfully")
    )

})


export {
    registerUser
}