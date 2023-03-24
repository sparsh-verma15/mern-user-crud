import config from "../config/config";
import app from "./express";
import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost:27017/myDatabase", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(config.port, (err) => {
	if (err) {
		console.log(err);
	}
	console.info("Server started on port %s.", config.port);
});
