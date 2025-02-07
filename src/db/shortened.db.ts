import ShortUrlModel from "../models/short_url.model";
import { ShortUrl } from "../types/shortened.types";

export const get_shortened_url = async (id: string): Promise<ShortUrl> => {
	console.log(id);

	const shortened_url = await ShortUrlModel.findById(id);
	if (!shortened_url) {
		throw new Error("Shortened URL not found");
	}
	console.log(shortened_url);
	return shortened_url;
};
