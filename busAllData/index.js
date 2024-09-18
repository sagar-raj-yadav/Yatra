import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes/BusDate.js';
import db from './db/db.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use("/", routes);

//database 
db();


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
