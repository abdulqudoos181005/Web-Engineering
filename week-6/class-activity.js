function sndLrg (arr){
    let l = -Infinity;
    let s = -Infinity;

    for (let i = 0; i < arr.length; i++){
        const n = arr[i];
        if (n > l){
            s = l;
            l = n;
        }
        else if (n > s && n < l){
            s = n;
        }
    }
    return s;


}
console.log(sndLrg([10, 3, 67,67,8])); // 10