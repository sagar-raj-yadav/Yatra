import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define the schema
const busDataSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    bus_name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    seat: {
        type: String,
        required: true
    },
    star: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    source_city:{
        type: String,
        required: true
    },
    destination_city:{
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},{  timestamps: true });

// Create the model
const busdataschema = mongoose.model('AllBusData', busDataSchema);

export default busdataschema;
