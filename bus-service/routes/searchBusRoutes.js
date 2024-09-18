import express from 'express';
import { searchBus, getBusById } from '../controllers/searchBusController.js';

const router = express.Router();

// Search flights route by source, destination
router.get('/searchBus', searchBus);

// Get flight by ID
router.get("/getBusById/:id",getBusById)



export default router;
