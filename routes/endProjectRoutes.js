const express = require("express");
const projController = require("../controllers/eoyProjectController");

const router = express.Router();

router
  .route("/")
  .get(projController.getAllEoyProjects)
  .post(projController.createEoyProject);

router
  .route("/:id")
  .get(projController.getEoyProject)
  .patch(projController.updateEoyProject)
  .delete(projController.deleteEoyProject);

module.exports = router;
