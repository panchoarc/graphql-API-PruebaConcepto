import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  age: Number,
});

export default model("User", UserSchema);
