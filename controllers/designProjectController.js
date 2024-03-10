const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const DesignProject = require("../models/designProjectModel");

exports.createDesignProject = catchAsync(async (req, res, next) => {
  const newProject = await DesignProject.create({
    project: req.body.project,
    members: req.body.members,
  });

  res.status(201).json({
    status: "Successful",
    data: {
      project: newProject,
    },
  });
});

exports.getAllDesignProjects = catchAsync(async (req, res, next) => {
  const projects = await DesignProject.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects,
    },
  });
});

exports.getDesignProject = catchAsync(async (req, res, next) => {
  const project = await DesignProject.findById(req.params.id);

  if (!project) {
    return next(new AppError("No project found with this id", 404));
  }

  res.status(200).json({
    stauts: "success",
    data: {
      project,
    },
  });
});

exports.updateDesignProject = catchAsync(async (req, res, next) => {
  const project = await DesignProject.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );
  if (!project) {
    return next(new AppError("No project found with this id", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.deleteDesignProject = catchAsync(async (req, res, next) => {
  const project = await DesignProject.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }
  res.status(204).json({
    status: "Successful",
    data: null,
  });
});
