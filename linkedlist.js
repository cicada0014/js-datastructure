// 연결리스트는 노드로 이뤄져있는데, 값으로 엘리먼트를 가지고 있고, 다음에 가리킬 주소를 알고있어야 함
// 시작은 header로 따로 만들고 끝은 null로 인식

function Node(element) {
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

//순차적으로 찾음
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}


function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    //current가 null 이면 에러가 나겟지 
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next === null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}


var testLList = new LList();
testLList.insert("1", "head");
testLList.insert("2", "1");
testLList.insert("3", "2");
testLList.insert("4", "3");

testLList.display();
testLList.remove("3");
testLList.display();


// 양방향 