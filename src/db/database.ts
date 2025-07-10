import mongoose from "mongoose";


export const connectDB=async()=>{

    try{

        await mongoose.connect(process.env.MONGOOSE_URL!);
        const connection=mongoose.connection;

        connection.on("connected",()=>{
            console.log('MongoDB connected SuccessFully!');
        })
        connection.on("error",(err)=>{
            console.log('MongoDb connection error: '+err); 
            process.exit();
        })



    }catch(err){
        console.log("Something went wrong!")
        console.log(err)
    }

    
}