const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connection established');
  });

// const testTour = new Tour({
//   name: 'Ha Noi',
//   rating: 4.6,
//   price: 333
// });
// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log(err);
//   });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
