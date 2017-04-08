// List 의 Abstract Data Type

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.perv = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }

    return -1;

}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;

}

function toString() {
    return this.dataStore;
}
// 기존 요소 바로 뒤 위치에 삽입. 매개변수 기존 원소, 넣을 원소
function insert(element, after) {
    var insertPos = this.find(element);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, after);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = 0;
}

function contains(element) {
    for (var i = 0; i < this.listSize; i++) {
        this.dataStore[i] = element
        return true;
    }

    return false;
}


//리스트의 탐색관련 함수
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
//현재 위치의 데이터값을 리턴함
function getElement() {
    return this.dataStore[this.pos];
}


//리스트의 반복자가 배열의 인덱스보다 좋은점
// 반복자는 구체적이지 않고 보편적이다. 인덱스는 리스트가 바뀌면 따라서 바뀌어야 하지만 반복자는 그와 무관하다

// es6의 iterable 를 통해 반복가능한 객체를 만들수 있는데 이는 리스트와는 별개다. 좀더 상위 추상적 개념

// 반복자를 이용해 리스트를 탐색하는 코드
// for(names.front();names.currPos()<names.length(); names.next()){
//     names.getElement()
// }
// 위 코드는 오류가 있다. next 함수가 length-1 값이되면 더이상 연산을 하지 않기때문에
// 무한 순환을 해버린다. 



// 리스트의 모든 요소보다 클때만 요소를 삽입하는 함수. 
List.prototype.biggest = function (element) {
    for (var i = 0; i < this.length(); i++) {
        if (this.dataStore[i] > element) {
            return false;
        }
    }
    this.append(element);
    return true;
}

var testList = new List();

for (var i = 1; i <= 10; i++) {
    testList.append(i);
}

testList.biggest(4);
console.log(testList);
testList.biggest(11);
console.log(testList);

