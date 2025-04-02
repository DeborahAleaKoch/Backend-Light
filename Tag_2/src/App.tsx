import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import JoggingComponent from "./components/JoggingComponent";

function App() {
	const [inputValue, setInputValue] = useState<string>("");

	const handleGenreClick = (genreName: string) => {
		console.log("hier wurde was geklickt!", genreName);
	};

	return (
		<>
			<JoggingComponent />
			<Button name={"Comedy"} onClick={handleGenreClick} />
			<Button name={"Horror"} onClick={handleGenreClick} />
			<Button name={"Action"} onClick={handleGenreClick} />
			<Button name={"Sci-Fi"} onClick={handleGenreClick} />
			<input
				type='number'
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
			/>
		</>
	);
}

export default App;
