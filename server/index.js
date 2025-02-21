import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import path from 'path';

import connectDB from './database/connectDB.js';

import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ credentials: true, origin: ['http://localhost:8081', 'http://localhost:5000'] }));
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(cookieParser());

app.use(express.static(
    path.resolve(__dirname, '../dist'),
    { maxAge: '1y', tag: false }
))

app.use('/api/auth', authRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
})