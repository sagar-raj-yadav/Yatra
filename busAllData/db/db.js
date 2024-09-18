import 'dotenv/config';
import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1); // Exit process with failure
    }
};


export default connectDB;
