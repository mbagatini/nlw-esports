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
		0: "Monday",
		1: "Tuesday",
		2: "Wednesday",
		3: "Thursday",
		4: "Friday",
		5: "Saturday",
		6: "Sunday",
	} as any;

	var daysWithName = {} as any;

	days.forEach(d => {
		daysWithName[d] = daysOfWeek[d];
	})

	return daysWithName;
}