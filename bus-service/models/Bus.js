import mongoose from "mongoose";

const busschemas  = new mongoose.Schema(
  {
    id: { type: String, required: true },
    bus_name: { type: String, required: true },
    type: { type: String, required: true },

    // Change price, seat, and star to Numbers
    price: { type: Number, required: true },
    seat: { type: Number, required: true },
    star: { type: Number, default: 0 }, // Optional: default value for star rating

    start_time: { type: String, required: true },
    end_time: { type: String, required: true },

    source_city: { type: String, required: true },
    destination_city: { type: String, required: true },

    duration: { type: String, required: true },
  });

const busdataschema = mongoose.model("allbusdatas", busschemas );
export default busdataschema;

//iss allbusdatas name ko change mat karna because ye same name mongodb me store h siliye
