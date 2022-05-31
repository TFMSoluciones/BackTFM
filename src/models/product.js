import { Schema, model } from 'mongoose';

const productSchema = new (
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }, {
        timestamps: true,
        versionKey: false
    }
);

export default model('Product', productSchema);