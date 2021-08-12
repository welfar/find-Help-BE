const { Schema, model, models } = require("mongoose");

const newsSchema = new Schema(
  {
    news: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const News = model("News", newsSchema);

module.exports = News;
