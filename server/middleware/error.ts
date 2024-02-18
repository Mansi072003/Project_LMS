import ErrorHandler from "../utils/ErrorHandler";
import { NextFunction, Request, Response } from "express";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //error handler middleware
  err.statusCode = err.statusCode || 500; //if status code is not set, set it to 500
  err.message = err.message || "Internal Server Error"; //if message is not set, set it to "Internal Server Error"

  //wrong mongoDb id error
  if (err.name === "CastError") {
    //if error name is CastError
    const message = `Resource not found. Invalid: ${err.path}`; //set message
    err = new ErrorHandler(message, 400); //set error
  }

  //duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON Web Token is invalid. Try Again!!!`;
    err = new ErrorHandler(message, 400);
  }

  //jwt expired error
  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token is expired. Try Again!!!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    //send error message
    success: false,
    error: err.stack,
  });
};


