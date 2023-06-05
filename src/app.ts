import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "../src/routes/note";

const app = express();

app.use(express.json());

app.use("/api/notes",notesRoutes);

app.use((req,res,next)=>{
    next(Error("End pint not found!"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error:unknown,req:Request,res:Response,next:NextFunction)=>{
    console.log(error);
    let errorMessage="unknown error occured";
    if(error instanceof Error) errorMessage=error.message;
    res.status(500).json({error:errorMessage});
});





export default app;