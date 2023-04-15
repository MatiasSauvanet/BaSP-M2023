var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months[5], months[11]);

console.log(months[3], months[7], months[11], months[1], months[0], months[6], months[5], months[2], months[4], months[10], months[9], months[8]);

months.unshift("Monday");
months.push ("Sunday");

console.log(months);

months.shift();
months.pop();

console.log(months);

months.reverse();

console.log(months);

var monthsOne = months.join("-");

console.log(monthsOne);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsTwo = months.slice(4, 10)

console.log(monthsTwo);

