function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;

}

function add(key, value) {
    this.dataStore.key = value;

}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    for (var key in Object.keys(this.dataStore)) {
        console.log(key + "->" + this.dataStore[key]);
    }
}

var testDic = new Dictionary();
testDic.add("kim", "a");
testDic.add("lee", "b");
testDic.add("park", "c");
testDic.add("choi", "d");

testDic.showAll()