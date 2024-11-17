import mongoose from "mongoose";
const { Schema } = mongoose;

const department = new Schema({
    codigo:{
        type: Number, 
        unique:true,
        required : true
    },
    nombre:{
        type : String, 
        required : true
    }
});

export const departmentModel = mongoose.model("departamento", department);