import express from "express";
import cors from "cors";
import path from 'path';

import routes from './routes/api.routes';

// Import mongodb lib and file config database
import mongoose from 'mongoose';
import dbConfig from './config/db.config.json';

// Import file server config
import serverConfig from './config/server.config.json';

// Create connect mongodb 
const url = `mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}/${dbConfig.DB}?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial(); khoi tao
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// Init expressJS
const app = express();

// Congfig core allow for other web
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Set static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// routes
routes.routes(app, express.Router());

// set port, listen for requests
const PORT = serverConfig.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const runServer = () => {
}

export default runServer;
