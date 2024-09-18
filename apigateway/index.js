import express from 'express';
import cors from 'cors';

import { createProxyMiddleware } from 'http-proxy-middleware';

const app=express();
const port= 1000;
app.use(cors());


const services={
    userService: 'http://localhost:5001',
    busService: 'http://localhost:5002',
    bookingService: 'http://localhost:5003',
}

app.get('/', (req, res) => {
    res.json('Hello, world');
  });

app.use('/api/users', createProxyMiddleware({ target: services.userService, changeOrigin: true }));
app.use('/api/buses', createProxyMiddleware({ target: services.busService, changeOrigin: true }));
app.use('/api/bookings', createProxyMiddleware({ target: services.bookingService, changeOrigin: true }));

app.listen(port, () => {
    console.log(`API Gateway running on http://localhost:${port}`);
  });