import express, { Router } from "express";
import productRouter from "./product.router";

const router = express.Router();

export default (): Router => {
    productRouter(router);

    return router;
};
