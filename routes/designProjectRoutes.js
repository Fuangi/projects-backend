const express = require("express");
const projController = require("../controllers/designProjectController");

const router = express.Router();

router
  .route("/")
  .get(projController.getAllDesignProjects)
  .post(projController.createDesignProject);

router
  .route("/:id")
  .get(projController.getDesignProject)
  .patch(projController.updateDesignProject)
  .delete(projController.deleteDesignProject);

module.exports = router;
