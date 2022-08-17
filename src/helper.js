const convertToHr = (seconds) => {
	let minutes=0;
	let hours=0;
	if (seconds > 60) {
		minutes = Math.floor(seconds / 60);
		seconds = seconds % 60;
		if (minutes > 60) {
			hours = Math.floor(minutes / 60);
			minutes = minutes % 60;
		}
	}
	return `${hours}:${minutes}:${seconds}`
}

export default convertToHr;
// console.log(convertToHr(184957));
