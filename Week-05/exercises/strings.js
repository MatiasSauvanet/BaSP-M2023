var text = "screenshot"
var mayusText = text.toUpperCase()

console.log(mayusText)

var textTitle = "programacion";
var textTest = textTitle.substring(0, 5);

console.log(textTest);

var title = "fotosintesis";
var titleSub = title.substring(9, 12);

console.log (titleSub);

var list = "mayOrmente";
var listUpper = list.substring(0, 1);
var listLower = list.substring(1);
var listDefinitive = listUpper.toUpperCase() + listLower.toLowerCase();

console.log (listDefinitive)

var subTitle = "perfo racion"
var subIndex = subTitle.indexOf(" ");

console.log(subIndex);

var problematic = "perfEccion aUtodidActa";
var problematicIndex = problematic.indexOf (" ") +1;
var problematicUpper = problematic.substring(0, 1);
var problematicUpperTwo = problematic.substring(problematicIndex, problematicIndex +1);
var problematicLower = problematic.substring(1, problematicIndex -1);
var problematicLowerTwo = problematic.substring(problematicIndex +1);
var problematicDefinitiveOne = problematicUpper.toUpperCase() + problematicLower.toLowerCase();
var problematicDefinitiveTwo = problematicUpperTwo.toUpperCase() + problematicLowerTwo.toLowerCase();

console.log(problematicDefinitiveOne, problematicDefinitiveTwo);