import  express from 'express';
import Booking from '../model/Booking.js';

const bookingseat=async(req,res)=>{
    try{
 const {userId,flightId,seatNumber,bookingDate,status}=req.body;
 const booking=new Booking({userId,flightId,seatNumber,bookingDate,status});
 await booking.save();
 res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

// {
//     "userId": "user123",
//     "flightId": "flight456",
//     "seatNumber": "12A",
//     "bookingDate": "2024-09-30T00:00:00.000Z",
//     "status": "confirmed",
//     "_id": "66e9f901539d97d9441fba0a",
//     "__v": 0
//   }


const bookingseatById=async(req,res)=>{
    try{
        const id=req.params.id;
        const booking=await Booking.findById(id);

        /*another method to find id 
         const { id } = req.params; // Destructure id from req.params
         const booking = await Booking.findById({id});  // Pass id directly to findById
        */

        if(!booking){
            return res.status(404).json({message:"booking data not found by id"});
        }
        res.json(booking);
    }catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const getbookingOfUser=async(req,res)=>{
    try{
        const {userId}=req.params;
        const booking=await Booking.find({userId});
        if(!booking){
            return res.status(404).json({message:"booking data not found by userid"});
        }
        res.json(booking);

    }catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const updatebooking=async(req,res)=>{
    try{
        const {id}=req.params;


        const booking=await Booking.findByIdAndUpdate(id);
        if(!booking){
            return res.status(404).json({message:"booking data not found to update"});
        }
        res.json(booking);
    }catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const cancelBooking=async(req,res)=>{
    try{
        const {id}=req.params;
        const booking = await Booking.findByIdAndUpdate(id, { status: 'canceled' }, { new: true });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found to delete' });
        }
        res.json({ message: 'Booking canceled successfully', booking });
    }catch (error) {
        res.status(400).json({ error: error.message });
      }
}


export { bookingseat,bookingseatById,getbookingOfUser,updatebooking,cancelBooking };