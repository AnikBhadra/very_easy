function check(arr, el) {
    
    if (arr.includes(el)) {
        return true;

    } else {
        return false;
    }
}
console.log(check([1, 2, 3, 4, 5], 3));