import React, { useState } from "react";
import { runDistance, warmUp, coolDown } from "../functions/jogging";

const JoggingComponent: React.FC = () => {
	const [distanceDescription, setDistanceDescription] = useState<string>("");
	const [warmUpTime, setWarmUpTime] = useState<number | null>(null);
	const [runDescriptionAndTime, setRunDescriptionAndTime] = useState<
		string | null
	>(null);

	const [coolDownTime, setCoolDownTime] = useState<number | null>(null);
	const [totalTime, setTotalTime] = useState<number | null>(null);
	const [status, setStatus] = useState<string>("Bereit zum Start");

	const handleDistanceDescriptionChange = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setDistanceDescription(event.currentTarget.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		startJogging();
	};

	const startJogging = async () => {
		setStatus("Warm Up");
		const warmUpTime = await warmUp();
		setWarmUpTime(warmUpTime);

		setStatus("Laufen");
		const runDescriptionAndTime = await runDistance(distanceDescription);
		setRunDescriptionAndTime(runDescriptionAndTime);

		setStatus("Cool-Down");
		const coolDownTime = await coolDown();
		setCoolDownTime(coolDownTime);

		setStatus("Fertig");
		const totalTime =
			warmUpTime +
			parseInt(runDescriptionAndTime.split(": ")[1]) +
			coolDownTime;
		setTotalTime(totalTime);
	};

	return (
		<div>
			<h2>Jogging Tracker</h2>
			<button onClick={startJogging}>Start Jogging</button>
			<p>Status: {status}</p>
			{warmUpTime !== null && <p>Warm-Up: {warmUpTime} Minuten</p>}
			{runDescriptionAndTime !== null && <p>{runDescriptionAndTime} Minuten</p>}
			{coolDownTime !== null && <p>Cool-Down: {coolDownTime} Minuten</p>}
			{totalTime !== null && <p>Gesamtzeit: {totalTime} Minuten</p>}
		</div>
	);
};

export default JoggingComponent;
