const express = require("express");

const app = express();

const port = 5000;

const movies = [
	{
		id: 1,
		title: "Citizen Kane",
		director: "Orson Wells",
		year: "1941",
		color: false,
		duration: 120,
	},
	{
		id: 2,
		title: "The Godfather",
		director: "Francis Ford Coppola",
		year: "1972",
		color: true,
		duration: 180,
	},
	{
		id: 3,
		title: "Pulp Fiction",
		director: "Quentin Tarantino",
		year: "1994",
		color: true,
		duration: 180,
	},
];

//route pour afficher la racie esemple page d'accueil :
const buffer = Buffer.from("Welcome to my favourite list movies", "utf8");

const favmovies = (res, req) => {
	res.send(buffer);
};
app.get("/", favmovies);

//route pour afficher la liste des movies :

app.get("/api/movies", (req, res) => {
	res.status(200).json(movies);
});

//route pour afficher  une id correspondante :

app.get("/api/movies/:id", (req, res) => {
	const moviesId = parseInt(req.params.id, 10);
	const fmovie = movies.find((m) => m.id === moviesId);
	if (fmovie) {
		res.status(200).json(fmovie);
	} else {
		res.status(404).send("Movies Not Found !");
	}
});
app
	.listen(port, () => {
		console.info(`Server is listening on http://localhost:${port}`);
	})
	.on("error", (err) => {
		console.error("Error:", err.message);
	});
