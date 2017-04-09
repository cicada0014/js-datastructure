function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.getMax = getMax;
    this.getMin = getMin;
    this.find = find;
    this.count = 1;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;

                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}


//중위 탐색
function inOrder(node) {
    if (!(node === null)) {
        inOrder(node.left);
        console.log(node.show() + "");
        inOrder(node.right);

    }
}

//전위 탐색

function preOrder(node) {
    if (!(node === null)) {
        console.log(node.show() + "");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node === null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + "");
    }
}

var nums = new BST();
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.log("inOrder");
inOrder(nums.root);
console.log("preOrder");
preOrder(nums.root);
console.log("postOrder");
postOrder(nums.root);

//이진 검색트리로 최솟값 찾기

function getMin() {
    var current = this.root;
    while (!(current.left) === null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root
    while (!(current.right) === null) {
        current = current.right;
    }
    return current.data;
}

function find(data) {
    var current = this.root;
    while (current.data != data) {
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }

        if (current === null) {
            return null;
        }

    }
    return current;
}


function remove(data) {
    root = removeNode(this.root, data)
}

function removeNode(node, data) {
    if (node === null) {
        return null;
    }

    if (data === node.data) {
        //자식이 없는 노드
        if (node.left === null && node.right === null) {
            return null
        }
        //왼쪽 자식이 없는 노드
        if (node.left === null) {
            return node.right;
        }
        //오른쪽 자식이 없는 노드
        if (node.right === null) {
            return node.left;
        }

        //두 자식이 있는 노드
        var tempNode = getMin(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

//발견횟수 계산

function updata(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}
