import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    arrayItems: [
      {
        assets: {
          type: String,
          required: true,
        },
        components: {
          type: String,
          required: true,
        },
        components: {
          type: String,
          required: true,
        },
      },
    ]
      { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
