import mongoose from "mongoose";

const bookingschema  = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    flightId: { type: String, required: true },
    seatNumber:{type: String, required: true },
    bookingDate: { type: Date, required: true },
    status: { type: String, default: 'confirmed' },

    
  });

const bookingdata = mongoose.model("allbookingdata", bookingschema );
export default bookingdata;

