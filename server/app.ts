import express from "express"
export const app=express();
import cors from "cors";
import cookieParser from "cookie-parser";

//body parser
app.use(express.json({limit: "50mb"}));//importantfor cloudinary