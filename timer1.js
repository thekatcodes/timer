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
