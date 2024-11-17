import express from "express";
import dotenv from "dotenv";
import { connectionMongo } from "./config/db.js";
import cors from "cors";
// Routes
import departmentRouter from "./routes/department.routes.js";
import employeeRouter from "./routes/employee.routes.js";

// server
const server = express();

// enviroment variables
dotenv.config();

// port access
const port = process.env.PORT;

// data base
connectionMongo();

// routes and request
server.use(express.json());

server.use(cors());

// departments
server.use("/departments", departmentRouter);

// employees
server.use("/employees", employeeRouter);

server.listen(port, ()=>{
    console.log(`listening port http://localhost:${port}`);
})