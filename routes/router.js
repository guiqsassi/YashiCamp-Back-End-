import express, { Router } from "express";
import user from "./user.routes.js";
import post from "./post.routes.js";
const router = Router()

router.use("/user", user)
router.use("/post", post)

export default router