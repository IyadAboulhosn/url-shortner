import asyncHandler from "express-async-handler";
import * as shortner_service from "../services/shortner.service";

export const get_shortened_url = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const shortened_url = await shortner_service.get_shortened_url(id);
	res.status(200).json(shortened_url);
});

export const shorten_url = asyncHandler(async (req, res) => {
	const { original_url } = req.body;
	const short_url = await shortner_service.shorten_url(original_url);
	res.status(200).json(short_url);
});
