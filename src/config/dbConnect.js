import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Alura:ajmp2512@cluster0.osbd9q2.mongodb.net/Api-rest-compass')

let db = mongoose.connection;

export default db;