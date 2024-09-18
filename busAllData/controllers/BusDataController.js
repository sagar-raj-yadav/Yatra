import BusDataModel from '../models/BusDataModel.js';

const getAllBusData = async (req, res) => {
    try {
        const busAllData = await BusDataModel.find({price:{$gt:200}});
        res.status(200).json({ busAllData });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bus data' });
    }
};

export default getAllBusData;
