const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
	res.send("<h1> github-action to push docker image to dockerhub </h1>");
});

app.listen(PORT, () => console.log("server started on port 8080"));
