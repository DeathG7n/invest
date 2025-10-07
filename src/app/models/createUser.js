import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    phone: Number,
    email: String,
    password: String,
    agree: Boolean
},{timestamps: true})

const Users = models.Users || model("Users", userSchema)


export default Users