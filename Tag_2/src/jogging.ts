export const runDistance = async (distance: string): Promise<string> => {
	const time = Math.floor(Math.random() * 66) + 25;
	console.log(time);

	await new Promise((resolve) => setTimeout(resolve, time * 100));
	clearTimeout;
	return `${distance}: ${time}`;
};

export const warmUp = async (): Promise<number> => {
	const warmUpTime = Math.floor(Math.random() * 6) + 5;
	await new Promise((resolve) => setTimeout(resolve, warmUpTime * 100));
	return warmUpTime;
};

export const coolDown = async (): Promise<number> => {
	const coolDownTime = Math.floor(Math.random() * 8) + 3;
	await new Promise((resolve) => setTimeout(resolve, coolDownTime * 100));
	return coolDownTime;
};
