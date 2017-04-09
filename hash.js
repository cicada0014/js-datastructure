function HashTable() {
    this.table = new Array(23);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    // this.get = get;
}

function simpleHash(data) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += H * total + data.charCodeAt(i);
    }
    return total % this.table.length;
}


// 배열 크기가 소수여야 충돌이 잦은데, 이도 충돌날 가능성이 있다 그래서 호너의 메소드라고 소수를 한번더 곱해주는 
// 연산을 해준다
function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            console.log(i + ":" + this.table[i]);
        }
    }
}

function put(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

var someNames = ["kim", "lee", "park", "choi", "wang", "han", "kong", "son", "ryu", "chung", "dol"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}

hTable.showDistro();

