const mongoose = require("mongoose")

const LinkSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            min: 5,
            max: 10,
            unique: true,
        },
        links: {
            type: Array,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("url", LinkSchema);
