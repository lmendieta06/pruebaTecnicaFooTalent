import { departmentModel } from "../models/department.js";

export const postDepartment = async(req, res)=>{
    try {
        const { codigo, nombre } = req.body;

        const newDepartment = new departmentModel({
            codigo,
            nombre
        });

        await newDepartment.save(); // Guarda el nuevo departamento en la base de datos
        return res.status(201).json({ message: "Departamento creado exitosamente", department: newDepartment });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getDepartments = async(req, res)=>{
    try {
        const departments = await departmentModel.find();
        if(departments.length === 0){
            return res.status(201).json("No se encontraron departamentos");
        }
        return res.status(200).json(departments); // Devuelve la lista de departamentos
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

export const updateDepartment = async(req, res)=>{
    try {
        const idUpdate = req.params._id;
        const { codigo, nombre } = req.body;

        const updatedDepartment = await departmentModel.findByIdAndUpdate(
            idUpdate,
            { codigo, nombre },
            { new: true } // Devuelve el nuevo documento actualizado
        );

        if (!updatedDepartment) {
            return res.status(404).json({ message: "Departamento no encontrado" });
        }

        return res.status(200).json({ message: "Departamento actualizado", department: updatedDepartment });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const deleteDepartment = async(req, res)=>{
    try {
        const idDelete = req.params._id;

        const deletedDepartment = await departmentModel.findByIdAndDelete(idDelete);

        if (!deletedDepartment) {
            return res.status(404).json({ message: "Departamento no encontrado" });
        }

        return res.status(200).json({ message: "Departamento eliminado", department: deletedDepartment });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}