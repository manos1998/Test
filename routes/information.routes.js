module.exports = app => {
    const informations = require("../controllers/inform.controller.js");
  
    var router = require("express").Router();

    router.post("/", informations.create);
    router.get("/", informations.findAll);
      
    app.use('/api/informations', router);
  };