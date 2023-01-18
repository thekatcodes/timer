// Implement an alarm clock / timer
// it will beep after a specified amount of time has passed
// user can specify an unlimited number of alarms using command line arguments
//node timer1.js 10 3 5 15 9 his will make it beep at 3 5 9 10 15 seconds

let times = [];
for (let time = 0; time < process.argv.length - 2; time++) {
	// console.log(time + ' -> ' + (process.argv[time + 2]))
	times.push(process.argv[time + 2]);
}
// console.log(times) -> logs array of all node arguments

const alarm = function (times) {
	// console.log(times) -> logs array of all node arguments

	let filteredTimes = times.filter(function (time) {
		return time >= 0;
	});
	// console.log(filteredTimes) -> log only numbers that are positive (will skip filter out anything that isn't including empty, neg number, not a number)

	// sort filtered times in ascending order
	let sortedTimes = filteredTimes.sort((a, b) => a - b);
    console.log(sortedTimes);

    // store convert passed time numbers as miliseconds (times * 1000) and store in variable for delay time in setTimeout
	let msTimes = [];
	for (let time of filteredTimes) {
		msTimes.push(time * 1000);
	}
	// console.log(msTimes);

	for (let time of msTimes) {
		let timeDelay = 0;
		timeDelay += time;

		setTimeout(function () {
			process.stdout.write("\x07");
		}, timeDelay);
		// console.log(timeDelay);
	}
};
alarm(times);
