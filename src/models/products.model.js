import { Schema, model } from "mongoose";

const productSchema = new Schema({
    barcode: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    expiredDate: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('product', productSchema);
