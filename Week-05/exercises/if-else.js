var random = Math.random(0, 1);

console.log(random);

if (random >= 0.5) {
    console.log ("Greater than or equal to 0.5");
}else {
    console.log ("Lower than 0.5");
}

var age =3;

console.log(age)

if (age <= 2) {
    console.log("Baby");
}else if (age <= 12) {
    console.log("Kid");
}else if (age <= 19) {
    console.log("Teen");
}else if (age <= 30) {
    console.log("Young");
}else if (age <= 60) {
    console.log("Adult");
}else if (age <= 75) {
    console.log("Elderly");
}else if (age <= 76) {
    console.log("old man");
}