const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
  check("name")
  .exists()
  .notEmpty()
  .isLength({ min: 2, max: 90 }),
  check("album")
  .exists()
  .notEmpty()
  .isLength({ min: 2, max: 30 }),
  check("cover")
  .exists()
  .notEmpty(),
  check("artist")
  .exists()
  .notEmpty(),
  check("artist.name")
  .exists()
  .notEmpty()
  .isLength({ min: 2, max: 30 }),
  check("artist.nickname")
  .exists()
  .notEmpty()
  .isLength({ min: 1, max: 30 }),
  check("artist.nationality")
  .exists()
  .notEmpty()
  .isLength({ min: 1, max: 20 }),
  check("duration")
  .exists()
  .notEmpty(),
  check("duration.start")
  .exists()
  .notEmpty(),
  check("duration.end")
  .exists()
  .notEmpty(),
  check("mediaId")
  .exists()
  .notEmpty()
  .isMongoId(),
  (req, res, next) => validateResults(req, res, next)
];

module.exports = {validatorCreateItem};