// @ts-nocheck
import express from "express";
import { IPerson } from "../frontend/vite-project/src/models/IPerson";
import { IStarship } from "../frontend/vite-project/src/models/IStarship";

import cors from "cors";
const app = express();
app.use(cors());

const port = 3000;

const people: IPerson[] = [
	{ id: 1, name: "Luke Skywalker" },
	{ id: 2, name: "Darth Vader" },
	{ id: 3, name: "Leia Organa" },
];

const starships: IStarship[] = [
	{ id: 1, name: "Millennium Falcon" },
	{ id: 2, name: "X-Wing" },
	{ id: 3, name: "TIE Fighter" },
];

app.get("/people", (req, res) => {
	res.json(people);
});

app.get("/starships", (req, res) => {
	res.json(starships);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
