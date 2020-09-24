const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://TRemigi:${MONGO_PASS}@cluster0.sjd0b.mongodb.net/shop-shop?retryWrites=true&w=majority` || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
