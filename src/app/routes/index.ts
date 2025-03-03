import express from "express";
import path from "path";
import { UserRoutes } from "../module/user.routes";

const routers = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    router: UserRoutes,
  },
];

moduleRoutes.forEach((route) => routers.use(route.path, route.router));
export default routers;
