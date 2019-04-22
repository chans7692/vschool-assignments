if (1 === 1) {
    console.log("strict")
} else if (1 == 1) {
    console.log("loose")
} else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 === 4) {
    console.log("yes")
}