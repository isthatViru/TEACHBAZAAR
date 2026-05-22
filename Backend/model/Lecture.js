const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    section: {
      type: String,
      required: [true, "Section name is required"],
      trim: true,
    },
    sectionOrder: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: [true, "Lecture title is required"],
      trim: true,
    },
    order: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["video", "article", "quiz"],
      default: "video",
    },
    videoUrl: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: "",
    },
    resources: [
      {
        title: String,
        url: String,
        type: { type: String, enum: ["pdf", "zip", "link"] },
      },
    ],
    isFreePreview: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

lectureSchema.index({ course: 1, sectionOrder: 1, order: 1 });

module.exports = mongoose.model("Lecture", lectureSchema);
