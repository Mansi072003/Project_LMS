import mongoose from "mongoose";    //import mongoose
require('dotenv').config(); //get .env file
const dbUrl:string = process.env.DB_URL || "";  //get db url from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data:any) => {
            console.log(`Database Connected with ${data.connection.host}`)  //show message if connected
        })
    } catch (error:any) {   //catch error
        console.log(error.message);   //show error message
        setTimeout(connectDB, 5000);    //try to connect after 5 seconds
    }
}

export default connectDB; //export connectDB function