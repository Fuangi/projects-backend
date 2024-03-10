const EoyProject = require("../models/eoyProjectModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.createEoyProject = catchAsync(async (req, res, next) => {
  const newProject = await EoyProject.create({
    name: req.body.name,
    specialty: req.body.specialty,
    level: req.body.level,
    projectTopic: req.body.projectTopic,
    projectSupervisor: req.body.projectSupervisor,
  });

  res.status(201).json({
    status: "Successful",
    data: {
      project: newProject,
    },
  });
});

exports.getAllEoyProjects = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(EoyProject.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const tours = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

exports.getEoyProject = catchAsync(async (req, res, next) => {
  const project = await EoyProject.findById(req.params.id);

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

exports.updateEoyProject = catchAsync(async (req, res, next) => {
  const project = await EoyProject.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });
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

exports.deleteEoyProject = catchAsync(async (req, res, next) => {
  const project = await EoyProject.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }
  res.status(204).json({
    status: "Successful",
    data: null,
  });
});
