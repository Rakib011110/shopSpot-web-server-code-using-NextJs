import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("create-admin");

export const UserRoutes = router;
