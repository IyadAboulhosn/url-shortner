import { ShortUrl } from "../types/shortened.types";
import * as db from "../db/shortened.db";
export const get_shortened_url = async (id: string): Promise<ShortUrl> => {
	const shortened_url = await db.get_shortened_url(id);
	return shortened_url;
};

export const shorten_url = async (original_url: string): Promise<{ short_url: string }> => {
	const shorten_url = await db.shorten_url(original_url);
	return shorten_url;
};
