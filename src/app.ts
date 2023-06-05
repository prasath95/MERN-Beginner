import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import NoteModel from "./models/note";

const app = express();

app.get("/", async (req,res,next) => {
    try {
        //throw Error("Dumb");
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    } catch (error) {
       next();
    }
});

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