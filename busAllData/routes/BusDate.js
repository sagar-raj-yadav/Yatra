
import express from 'express';
const router=express.Router();
import BusData from '../controllers/BusDataController.js';

router.get("/busdata",BusData);

export default router;
