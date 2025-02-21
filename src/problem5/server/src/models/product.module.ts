import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,        
    },
    price: {
        type: Number,
        trim: true,
        require: true
    }
})

export const Product = mongoose.model('Product', ProductSchema);