import mongoose from "mongoose";
const { Schema } = mongoose;

const employee = new Schema({
    codigo:{
        type: Number, 
        unique:true,
        required : true
    },
    nombre:{
        type : String, 
        required : true
    },
    apellido1:{
        type : String, 
        required : true
    },
    apellido2:{
        type : String, 
        required : true
    },
    codigoDepartamento:{
        // get department information
        type: mongoose.Schema.Types.ObjectId,
        ref: 'departamento',
        required : true
    }
});

export const employeeModel = mongoose.model("empleado", employee);