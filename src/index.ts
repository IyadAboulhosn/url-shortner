import "./server";

import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/urlshortner";

export const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as any);
		console.log("✅ MongoDB Connected...");
	} catch (error) {
		console.error("❌ MongoDB Connection Error:", error);
		process.exit(1); // Exit process with failure
	}
};

export default connectDB;
