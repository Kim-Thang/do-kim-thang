import { Request, Response } from "express";
import { Product } from "../models/product.module";

export const createProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const { name, description, price } = req.body;

        if (!name || !price) {
            return res
                .status(400)
                .json({ message: "Name and price are required" });
        }

        const newProduct = new Product({
            name,
            description,
            price,
        });

        await newProduct.save();
        return res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getProducts = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const { minPrice, maxPrice, name } = req.query;
        
        let filters: any = {};

        if (minPrice || maxPrice) {
            filters.price = {};
            if (minPrice) filters.price.$gte = Number(minPrice);
            if (maxPrice) filters.price.$lte = Number(maxPrice);
        }

        if (name) {
            filters.name = { $regex: name, $options: "i" };
        }

        const products = await Product.find(filters);

        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getProductById = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if (!product) {
            return res.sendStatus(404);
        }

        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const updateProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const { name, description, price } = req.body;

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.sendStatus(404);
        }

        await Product.findByIdAndUpdate(
            { _id: req.params.id },
            { name, description, price }
        );

        return res.json({ message: "Product is updated successfully" });
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.sendStatus(404);
        }

        await Product.findByIdAndDelete({ _id: req.params.id });
        return res.json({ message: "Product is deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
