export function convertHourStringToMinutes(hourString: string) {
	const [hours, minutes] = hourString.split(':').map(Number);

	const minutesAmount = (hours * 60) + minutes;

	return minutesAmount;
}

export function convertMinutesToHoursString(minutes: number) {
	const hours = Math.floor(minutes / 60);
	const minutesString = minutes % 60;

	// Format using fixed positions
	return String(hours).padStart(2, '0') + ':' + String(minutesString).padStart(2, '0');
}

export function getDaysOfWeekFromIndexArray(days: number[]) {
	const daysOfWeek = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
	} as any;

	var daysWithName = {} as any;

	days.forEach(d => {
		daysWithName[d] = daysOfWeek[d];
	})

	return daysWithName;
}