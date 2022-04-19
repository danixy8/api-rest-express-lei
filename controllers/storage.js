const {storageModel} = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  const data = await storageModel.find({});

  res.json(data);
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
  const {body, file} = req;
  const data = await storageModel.create({
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  });
  res.send({data});
}

const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};