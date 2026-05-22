const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      default: "",
      maxlength: 1000,
    },
    headline: {
      type: String,
      default: "",
      maxlength: 200,
    },
    expertise: {
      type: [String],
      default: [],
    },
    linkedinUrl: {
      type: String,
      default: "",
    },
    websiteUrl: {
      type: String,
      default: "",
    },
    socialLinks: {
      twitter: { type: String, default: "" },
      youtube: { type: String, default: "" },
    },
    bankDetails: {
      accountNumber: { type: String, select: false },
      ifscCode: { type: String, select: false },
      accountHolderName: { type: String, select: false },
    },
    avgRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalStudents: {
      type: Number,
      default: 0,
    },
    totalCourses: {
      type: Number,
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
