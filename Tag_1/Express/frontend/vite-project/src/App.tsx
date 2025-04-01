import axios from "axios";
import { useEffect, useState } from "react";
import { IPerson } from "./models/IPerson";
import { IStarship } from "./models/IStarship";

function App() {
	const [SWCharacters, setSWCharacters] = useState<IPerson[]>([]);
	const [SWShip, setSWShip] = useState<IStarship[]>([]);

	useEffect(() => {
		const fetchDataPeople = async () => {
			const response = await axios.get("http://localhost:3000/people");
			console.log(response.data);
			setSWCharacters(response.data);
		};
		fetchDataPeople();
	}, []);

	useEffect(() => {
		const fetchDataShips = async () => {
			const response = await axios.get("http://localhost:3000/starships");
			console.log(response.data);
			setSWShip(response.data);
		};
		fetchDataShips();
	}, []);

	return (
		<>
			{SWCharacters && SWCharacters.map((character) => <p>{character.name}</p>)}
			{SWShip && SWShip.map((ship) => <p>{ship.name}</p>)}
		</>
	);
}

export default App;
