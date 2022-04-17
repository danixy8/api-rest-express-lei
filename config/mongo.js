const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err, res) =>{
    if(!err){
      console.log('MongoDB connected');
    }else{
      console.log('Error connecting to MongoDB');
    }
  });
}

module.exports = dbConnect;