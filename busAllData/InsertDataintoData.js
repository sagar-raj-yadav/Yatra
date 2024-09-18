import 'dotenv/config';
import connectDb from './db/db.js';
import BusDataModel from './models/BusDataModel.js';
import BusData from './BusData.json' assert { type: 'json' };

const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI);
        await BusDataModel.create(BusData);
        console.log("success");
    }catch(error){
        console.log("error while inserting data into database");
        console.log(error);

    }
}

start();

//write in terminal " node InsertDataintoData.js "