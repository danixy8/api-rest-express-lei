const fs = require('fs');
const { matchedData } = require('express-validator');
const {storageModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
  try{    
    const data = await storageModel.find({});
    res.json(data);
  }catch(e){
    handleHttpError(res, 'ERROR_LIST_ITEM');
  }
}

const getItem = async (req, res) => {
  try{
    req = matchedData(req);   
    const data = await storageModel.findById(req.id);
    res.json(data);
  }catch(e){
    handleHttpError(res, 'ERROR_DETAIL_ITEM');
  }
}

const createItem = async (req, res) => {
  try{
    const {body, file} = req;
    const data = await storageModel.create({
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`
    });
    res.send({data});
  }catch(e){
    handleHttpError(res, 'ERROR_CREATE_ITEM');
  }
}

const deleteItem = async (req, res) => {
  try{
    req = matchedData(req);   
    const dataFile = await storageModel.findById(req.id);
    await storageModel.deleteOne(id);
    const {filename} = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filePath);
    const data = {
      filePath,
      deleted:1
    }
    res.json(data);
  }catch(e){
    handleHttpError(res, 'ERROR_DETAIL_ITEM');
  }
}

module.exports = {getItems, getItem, createItem, deleteItem};