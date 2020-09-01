function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    let middle = Math.floor(unsortedArray.length / 2);
    let left = unsortedArray.slice(0, middle);
    let right = unsortedArray.slice(middle);
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// Original: [14, 32, 67, 76, 23, 41, 58, 85]
// Output:   [14, 23, 32, 41, 58, 67, 76, 85]
console.log(mergeSort([14, 32, 67, 76, 23, 41, 58, 85]))
