const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
      maxlength: 200,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    shortDescription: {
      type: String,
      maxlength: 300,
    },
    thumbnail: {
      type: String,
      default: "",
    },
    previewVideo: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced", "all levels"],
      default: "all levels",
    },
    language: {
      type: String,
      default: "English",
    },
    requirements: {
      type: [String],
      default: [],
    },
    learningOutcomes: {
      type: [String],
      default: [],
    },
    totalDuration: {
      type: Number,
      default: 0,
    },
    totalLectures: {
      type: Number,
      default: 0,
    },
    totalEnrollments: {
      type: Number,
      default: 0,
    },
    avgRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    publishedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

courseSchema.index({ title: "text", description: "text", tags: "text" });
courseSchema.index({ category: 1, isPublished: 1 });
courseSchema.index({ teacher: 1 });

module.exports = mongoose.model("Course", courseSchema);
