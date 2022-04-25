const { matchedData } = require('express-validator');
const {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');

const getItems = async (req, res) => {
  try{
    const data = await tracksModel.find({});
    res.json(data);
  }catch(e){
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
}

const getItem = async(req, res) => {
  try{
    req = matchedData(req);
    const data = await tracksModel.findById(req.id);
    res.json(data);
  }catch(e){
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
}

const createItem = async(req, res) => {
  try{
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({data});
  }catch(e){
    handleHttpError(res, 'ERROR_CREATE_ITEMS');
  }
}

const updateItem = async(req, res) => {
  try{
    const {id, ...body} = matchedData(req);
    const data = await tracksModel.findByIdAndUpdate(
      id, body, {new: true}
    );
    res.send({data});
  }catch(e){
    handleHttpError(res, 'ERROR_UPDATE_ITEM');
  }
}

const deleteItem = async(req, res) => {
  try{
    req = matchedData(req);
    const data = await tracksModel.delete({_id: req.id});
    res.send(data);
  }catch(e){
    handleHttpError(res, 'ERROR_DELETE_ITEMS');
  }
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};