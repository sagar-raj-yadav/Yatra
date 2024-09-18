import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    username: { 
        type: String,
         required: true, 
         unique: true
         },
    email: { 
        type: 
        String,
         required: true, 
         unique: true 
        },
    password: { 
        type: String,
         required: true
         },
    location:{
            type: String,
            required: false
         },
    phone:{
        type: Number,
        required:false
    }
  }, { timestamps: true });


  const userdata = mongoose.model("user", userschema );
export default userdata;