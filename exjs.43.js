function repeatString(txt, n) {
    if (typeof txt=== "string") {
        return txt.repeat(n);
    }
    else {
        return "not a string";
    }
}
console.log(repeatString(10, 2));