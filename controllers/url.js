const Link = require("../models/url");

module.exports = {
  GetUrls: async (req, res) => {
    try {
      const link = await Link.findOne({ key: req.params.key });
      if (link && link.links) res.status(200).send(link);
      else res.status(404).send("Not Found");
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  PostUrls: async (req, res) => {
    try {
      const link = await Link.findOneAndUpdate(
        { links: [] },
        {
          links: req.body.links,
        }
      ).then((link) => {
        res.status(200).send(link);
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  PostCustomUrls: async (req, res) => {
    try {
      const link = await Link.create({
        links: req.body.links,
        key: req.body.customLink,
      });
      res.status(200).send(link);
    } catch (err) {
      console.log(err);
      if (err.code === 11000) res.status(400).send("Key already exists");
      else res.status(500).send(err);
    }
  },
};
