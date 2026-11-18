function countOccurance(arr, num){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            count++;
        }
    }
    return count;
}

console.log(countOccurance([1, 2, 3, 4, 5, 1, 2, 1], 1));

function moveFirstToLast(arr){
    if(arr.length === 0) return arr;
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}
 arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(moveFirstToLast(arr));

function findDiffernce(arr){
    arr.sort((a, b) => a - b);
    console.log(arr);
    dif = arr[arr.length - 1] - arr[0];
    return dif;
}
arr = [14,6,7,9,7,4,11,23,5];
console.log(arr);
console.log(findDiffernce(arr));