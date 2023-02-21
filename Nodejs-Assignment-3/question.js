function rearrangeArray(arr) {
    let n = arr.length;
    let maxArr = [];
    let minArr = [];
    let maxIndex = n - 1;
    let minIndex = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            maxArr[i] = arr[maxIndex];
            maxIndex--;
        } else {
            minArr[i] = arr[minIndex];
            minIndex++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (maxArr[i]) {
            arr[i] = maxArr[i];
        } else {
            arr[i] = minArr[i];
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6];
rearrangeArray(arr);
console.log(arr);  