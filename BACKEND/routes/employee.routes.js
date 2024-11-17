import express from "express";
import { getEmployees, postEmployee, deleteEmployee, updateEmployee } from "../controllers/employee.controller.js";

const employeeRouter = express.Router();

employeeRouter.get("/", getEmployees);
employeeRouter.post("/", postEmployee);
employeeRouter.put("/:_id", updateEmployee);
employeeRouter.delete("/:_id", deleteEmployee);

export default employeeRouter;