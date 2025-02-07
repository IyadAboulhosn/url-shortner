import express from "express";
import * as shortner_controller from "../controllers/shortner.controller";

export const router = express.Router();

router.route("/:id").get(shortner_controller.get_shortened_url);

// router.route("/shorten").post(shortner_controller.shorten_url);
