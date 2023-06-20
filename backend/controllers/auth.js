import { User, ArrayItem } from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send(newUser);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or emai!"));

    // const token = jwt.sign(
    //   { id: user._id, isAdmin: user.isAdmin },
    //   process.env.JWT
    // );

    const { ...otherDetails } = user._doc;
    res
      // .cookie("access_token", token)
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
};

export const storeProjects = async (req, res, next) => {
  const userId = req.params.id;
  const { assets, components, css, html, styles } = req.body;
  try {
    // Create a new ArrayItem
    const newArrayItem = new ArrayItem({
      user: userId,
      assets,
      components,
      css,
      html,
      styles,
    });

    // Save the new array item
    const savedArrayItem = await newArrayItem.save();

    // Find the user by ID
    // const user = await User.findById(userId);

    // Add the saved array item to the user's arrayItems
    // user.arrayItems.push(savedArrayItem._id);

    // Save the user with the updated arrayItems
    // await user.save();

    res.status(200).json(savedArrayItem);
  } catch (error) {
    next(err);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await ArrayItem.find({
      user: req.params.id,
    });
    // .exec();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};
