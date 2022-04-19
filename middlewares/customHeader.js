const customHeader = (req, res, next) => {
  try{
    const apiKey = req.headers.api_key;
    if(apiKey === 'daniel_123'){
      next();
    }else{
      res.status(403);
      res.send({error: 'INVALID_API_KEY'});
    }
  }catch(e){
    res.status(403);
    res.send({error: 'SOMETHING_HAPPENED_IN_THE_CUSTOM_HEADER'});
  }
}

module.exports = customHeader;