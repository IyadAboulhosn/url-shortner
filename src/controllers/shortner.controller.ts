import asyncHandler from "express-async-handler";
import * as shortner_service from "../services/shortner.service";

export const get_shortened_url = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const shortened_url = await shortner_service.get_shortened_url(id);
	res.status(200).json(shortened_url);
});
