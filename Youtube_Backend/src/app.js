import express from "express"
import cors from "cors"
import cookiesParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//for accepting direct or form data
app.use(express.json({ limit: "16kb" }))//we are accepting json data

//for accepting url data through params
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // extended means object under object

app.use(express.static("public"))//for storing pdf, files n images like data in our server in public folder

//cookieParser used to access, set the cookies of target's browser by our server, could perform crud opt on cookies
app.use(cookiesParser())


//routes import

import userRouter from "./routes/user.routes.js"

//routes declaration

app.use('/api/v1/users', userRouter);

export { app }