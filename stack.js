function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top]
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}
var testStack = new Stack();

// 스택을 이용해 괄호쌍이 잘 갖춰져있는지 확인하는 함수를 짤 수 있다.

//하나씩 살펴가면서 열린괄호가 나오면 스택에 쌓아두고 닫힌괄호가 나오면 스택에서 제거한다
// 그러면 자연스레 가장 최신의 괄호가 짝이 맞아 지워진다. 

// 후위연산자의 경우도 스택으로 가능하다.
// 중위연산자로 구현된 것을 후위연산자로 바꿀때에 가장 마지막에 확인되는 연산자가
// 후위연산자에서 가장 첫번째로 표현되기때문이다. 

