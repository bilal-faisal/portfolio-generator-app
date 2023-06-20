import mongoose from "mongoose";

const ArrayItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  assets: {
    type: String,
    required: true,
  },
  components: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  styles: {
    type: String,
    required: true,
  },
});

// Define the schema for the User model
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      // unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // arrayItems: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "ArrayItem",
    //   },
    // ],
  },
  { timestamps: true }
);

// Create the User model
const User = mongoose.model("User", UserSchema);

// Create the ArrayItem model
const ArrayItem = mongoose.model("ArrayItem", ArrayItemSchema);

export { User, ArrayItem };
