var container = ["fideos", "carne", "pollo", "verduras", "legumbres"];

for (var i = 0; i < container.length; i++) {
    // alert(container[i])
}

console.log(container)

// 5b)

for (var i = 0; i < container.length; i++) {
    var f = container[i].substring(0, 1).toUpperCase() + container[i].substring(1, container[i].length)
    // alert(f)
}

//5c)

var sentence = []

for (let index = 0; index < container.length; index++) {
    sentence += container[index] + (" ")
}

// alert(sentence)

//6d)

var empty = []

for (let index = 0; index < 10; index++) {
    empty += index + (" ")
    console.log(empty)
}