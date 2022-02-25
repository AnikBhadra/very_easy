function swap(a, b) {
    c = a
    a = b
	b = c
	return [a, b]
}
console.log(swap(5, 4))