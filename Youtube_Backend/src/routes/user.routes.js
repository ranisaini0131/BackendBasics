import { Router } from "express"
import { registerUser } from "../controllers/user.controllers.js";


const router = Router()

router.route("/registeration").post(registerUser)
// router.route("/login").post(loginUser)






export default router;