
import express from 'express';
import cors from 'cors';
import  mongoose from 'mongoose';

import authenticationRoutes from './routes/authenticationRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://rest:sagarrestapi@cluster0.6r0d2yb.mongodb.net/busbooking?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err));

app.get('/', (req, res) => {
  res.json('user service');
});


app.use('/api',authenticationRoutes);


app.listen(5001, () => {
    console.log('Server is running on port 5001');
  });
  