function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count();
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue(element) {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1]
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

// 큐가 비었는지 확인
function empty() {
    if (this.dataStore.length === 0) {
        return true
    } else {
        return false;
    }
}

function count() {
    return this.dataStore.length;
}

var deque = new Queue();


// 뒷부분에서도 요소의 삽입 삭제가 이뤄지는 deque이라는 자료구조도 있다
// 간단하게 앞뒤에서도 큐에서 일어나는 것처럼 데이터배열을 조작해주면 된다. 
// 스택과 큐를 합친 느낌이라고 한다.

