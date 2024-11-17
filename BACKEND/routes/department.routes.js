import express from "express";

import { getDepartments, postDepartment, updateDepartment, deleteDepartment } from "../controllers/department.controller.js";

const departmentRouter = express.Router();

departmentRouter.get("/", getDepartments);
departmentRouter.post("/", postDepartment);
departmentRouter.put("/:_id", updateDepartment),
departmentRouter.delete("/:_id", deleteDepartment);

export default departmentRouter;