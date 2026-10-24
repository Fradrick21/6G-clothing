const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    phone: { type: String, default: '' },
    cart: { type: [mongoose.Schema.Types.Mixed], default: [] },
    wishlist: { type: [String], default: [] },
    addresses: { type: [mongoose.Schema.Types.Mixed], default: [] },
    orders: { type: [mongoose.Schema.Types.Mixed], default: [] },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
