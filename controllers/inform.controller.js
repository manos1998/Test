const db = require("../models");
const Information = db.information;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

  // Create a Tutorial
  const informati = {
    end_year: Number(req.body.end_year) == 0 ? null: Number(req.body.end_year),
    intensity: Number(req.body.intensity) == 0 ? null: Number(req.body.intensity),
    sector: req.body.sector,
    topic: req.body.topic,
    insight: req.body.insight,
    url: req.body.url,
    region: req.body.region,
    start_year: Number(req.body.start_year) == 0 ? null : Number(req.body.start_year),
    impact: Number(req.body.impact) == 0 ? null : Number(req.body.impact),
    added: req.body.added,
    published: req.body.published,
    country: req.body.country,
    relevance: req.body.relevance,
    pestle: req.body.pestle,
    source: req.body.source,
    title: req.body.title,
    likelihood: Number(req.body.likelihood) == 0 ? null : Number(req.body.likelihood)
  };

  let arr = [];

  for (let index = 0; index < req.body.length; index++) {
    const information = {
      end_year: Number(req.body[index].end_year) == 0 ? null: Number(req.body[index].end_year),
      intensity: Number(req.body[index].intensity) == 0 ? null: Number(req.body[index].intensity),
      sector: req.body[index].sector,
      topic: req.body[index].topic,
      insight: req.body[index].insight,
      url: req.body[index].url,
      region: req.body[index].region,
      start_year: Number(req.body[index].start_year) == 0 ? null : Number(req.body[index].start_year),
      impact: Number(req.body[index].impact) == 0 ? null : Number(req.body[index].impact),
      added: req.body[index].added,
      published: req.body[index].published,
      country: req.body[index].country,
      relevance: Number(req.body[index].relevance) == 0 ? null : Number(req.body[index].relevance),
      pestle: req.body[index].pestle,
      source: req.body[index].source,
      title: req.body[index].title,
      likelihood: Number(req.body[index].likelihood) == 0 ? null : Number(req.body[index].likelihood)
      }  
      Information.create(information)
      .then(data => {
      })
      .catch(err => {
      });
  }
  res.status(200).send({
    message: "Data inserted Successfully"
  })

  // Information.create(informati)
  // .then(data => {
  //   res.send(data);
  // })
  // .catch(err => {
  //   res.status(500).send({
  //     message:
  //       err.message || "Some error occurred while retrieving tutorials."
  //   });
  // });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

    Information.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
