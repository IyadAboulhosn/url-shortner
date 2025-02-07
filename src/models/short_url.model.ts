import mongoose from "mongoose";
import { Schema, model, Document } from "mongoose";

interface IShortUrl extends Document {
	original_url: string;
	short_id: string;
	created_at: Date;
	clicks: number;
}

const ShortUrlSchema = new mongoose.Schema<IShortUrl>({
	original_url: { type: String, required: true },
	short_id: { type: String, required: true, unique: true },
	created_at: { type: Date, default: Date.now },
	clicks: { type: Number, default: 0 },
});

const ShortUrlModel = mongoose.model("ShortUrl", ShortUrlSchema, "url");
export default ShortUrlModel;
