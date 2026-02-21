import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async() => {
    try {
        if(!ENV.DB_URL) {
            throw new Error("Database URL is not defined in environment variables");
        }
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}
