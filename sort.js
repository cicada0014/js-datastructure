function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertSort = insertSort;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i];
    }
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

// var numElements = 100;
// var myNums = new CArray(numElements);
// myNums.setData();
// console.log(myNums.toString());


function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; inner++) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                this.swap(this.dataStore, inner, inner + 1);
            }
        }
        // console.log(this.toString());
    }
}



function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; outer++) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; inner++) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        this.swap(this.dataStore, outer, min);
    }
}

function insertSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] > temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

// var numElements = 10;
// var myNums = new CArray(numElements);
// myNums.setData();
// console.log(myNums.toString());
// myNums.bubbleSort();
// myNums.selectionSort();
// myNums.insertSort();
// console.log(myNums.toString());


var numElements = 10000;
var myNums = new CArray(numElements);
myNums.setData();
for (var i = 0; i < 3; i++) {
    //알고리즘 시간비교를 위한 타이머
    var start = new Date().getTime();
    //프로그램 가동
    switch (i) {
        case 0: myNums.bubbleSort();
            break;
        case 1: myNums.selectionSort();
            break;
        case 2: myNums.insertSort();
            break;
    }

    //시간 계산
    var stop = new Date().getTime();
    var elapsed = stop - start;
    console.log("The elapsed time was: " + elapsed + "milliseconds");

}