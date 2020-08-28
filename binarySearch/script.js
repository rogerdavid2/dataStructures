function binarySearch(target, ...elements) {
    let min = 0;
    let max = elements.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (elements[mid] < target) {
            min = mid + 1;
        } else if (elements[mid] > target) {
            max = mid - 1;
        } else {
            return mid;
        }
    }
    return - 1;
}

let numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
console.log(binarySearch(17, ...numbers));