import express, { Router } from "express";
import user from "./user.routes.js";
import post from "./post.routes.js";
import campingZone from "./campingZone.routes.js";
const router = Router()

router.use("/campingZone", campingZone)
router.use("/user", user)
router.use("/post", post)

export default router