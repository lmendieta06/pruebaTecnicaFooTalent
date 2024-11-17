import mongoose from "mongoose";

export const connectionMongo = async () =>{

    try{

        // connect data base
        await mongoose.connect(process.env.CONNECTION_DB,{});

        console.log(`succesful connection to data base`);
    }catch(error){
        console.error("Error de conexion : ", error.message);
    }

}