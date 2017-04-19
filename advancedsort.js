function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i];
    }

    this.gaps = [5, 3, 1];
    this.setGaps = setGaps;

    this.shellSort = shellSort;
}


function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 === 0) {
            retstr += "\n";
        }

    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    // console.log(this.toString());
}


function shellSort() {
    // 로버트세지윅의 동적 갭 시퀀스 계산추가
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
    // for (var g = 0; g < this.gaps.length; g++) {
    //     for (var i = this.gaps[g]; i < this.dataStore.length; i++) {
    //         var temp = this.dataStore[i];
    //         for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp;
    //             j -= this.gaps[g]) {
    //             this.dataStore[j] = this.dataStore[j - this.gaps[g]];
    //         }
    //         this.dataStore[j] = temp;
    //     }
    // console.log(this.toString());
    // }
}
function setGaps(arr) {
    this.gaps = arr;
}



function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
}


//머지는 나중에 공부
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    // k = 
}



function qSort(list) {
    if (list.length === 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}

var test = [];
for (var i = 0; i < 100; i++) {
    test[i] = Math.floor(Math.random() * 100 + 1);
}


console.log(test);
console.log();
console.log(qSort(test));

// var numElements = 100;
// var myNums = new CArray(numElements);
// myNums.setData();
// console.log(myNums.toString());
// myNums.shellSort();
// console.log(myNums.toString());