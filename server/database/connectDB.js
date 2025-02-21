import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connect to database: ${conn.connection.host}`);
    } catch (error) {
        console.log('Connection failed');
    }
}

export default connectDB;