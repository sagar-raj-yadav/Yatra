import  express from 'express';
import {bookingseat,bookingseatById,getbookingOfUser,updatebooking,cancelBooking} from '../controller/BookingController.js';
const router = express.Router();


// Create a new reservation
router.post('/bookseat',bookingseat);

// Get reservation details by ID
router.get('/getdataId/:id',bookingseatById);

// Get all reservations for a user
router.get('/getdataByUserId/:userId',getbookingOfUser);

// Update reservation
router.put('/updatebooking/:id',updatebooking);

// Cancel reservation
router.patch('/cancelbooking/:id',cancelBooking);

export default router;