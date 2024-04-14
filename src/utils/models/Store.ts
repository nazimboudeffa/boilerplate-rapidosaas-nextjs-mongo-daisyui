import mongoose, { Schema, models } from "mongoose";

const storeSchema = new Schema(
  {
    email: {
        type: String,
        required: true,
        unique: true,
      },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    tiktok: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Store = models.Store || mongoose.model("Store", storeSchema);
export default Store;