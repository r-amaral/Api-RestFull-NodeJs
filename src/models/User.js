import mongoose from "mongoose";
import { validationDate } from "../utils/validationDate.js";

const userSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        cpf: { type: String, required: true, minlength: 11, maxlength: 11 },
        birthDate: {
            type: Date,
            validate: [e => validationDate(e), 'User under 18 years old'],
            required: true
        },
        email: { type: String, required: true, match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, 'Invalid email'] },
        password: { type: String, required: true, minlength: 6, select: false },
        address: { type: String, required: true },
        number: { type: String, required: true },
        complement: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

let users = mongoose.model('users', userSchema);

export default users;