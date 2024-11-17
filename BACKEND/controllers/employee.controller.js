import { employeeModel } from "../models/employee.js";

export const postEmployee = async(req, res)=>{
    try {
        const { codigo, nombre, apellido1, apellido2, codigoDepartamento } = req.body;

        const newEmployee = new employeeModel({
            codigo,
            nombre,
            apellido1,
            apellido2,
            codigoDepartamento
        });

        await newEmployee.save();  // Guarda el nuevo empleado en la base de datos
        return res.status(201).json({ message: "Empleado creado exitosamente", employee: newEmployee });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getEmployees = async(req, res)=>{
    try {
        const employees = await employeeModel.find().populate('codigoDepartamento');

        if(employees.length === 0){
            return res.status(201).json("No se encontraron empleados registrados");
        }

        return res.status(200).json(employees);  // Devuelve la lista de empleados
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

export const updateEmployee = async(req, res)=>{
    try {
        const idUpdate = req.params._id;
        const { nombre, apellido1, apellido2, codigoDepartamento } = req.body;

        const updatedEmployee = await employeeModel.findByIdAndUpdate(
            idUpdate,
            { nombre, apellido1, apellido2, codigoDepartamento },
            { new: true }  // Devuelve el nuevo documento actualizado
        );

        if (!updatedEmployee) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }

        return res.status(200).json({ message: "Empleado actualizado", employee: updatedEmployee });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const deleteEmployee = async(req, res)=>{
    try {
        const idDelete = req.params._id;

        const deletedEmployee = await employeeModel.findByIdAndDelete(idDelete);

        if (!deletedEmployee) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }

        return res.status(200).json({ message: "Empleado eliminado", employee: deletedEmployee });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
