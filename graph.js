function Vertex(label) {
    this.label = label;
}


function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = [];
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        // this.adj[i].push("");

    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.toString = toString;
    this.dfs = dfs;
    this.bfs = bfs;
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        console.log(i + "->");
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + "");
            }
        }
    }
}
//깊이 우선 검색 함수
function dfs(v) {
    // 방문했음을 기록함.
    this.marked[v] = true;
    // if문이 반드시 필요한 것은 아니다 
    if (this.adj[v] != undefined) {
        console.log("Visited vertex:" + v);
    }
    for (var w in this.adj[v]) {
        var n = this.adj[v][w];
        if (!this.marked[n]) {
            this.dfs(n);
        }
    }
}


//너비 우선 검색 함수
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v != undefined) {
            console.log("Visited vertex:" + v);
        }

        for (var w in this.adj[v]) {
            var n = this.adj[v][w];
            if (!this.marked[n]) {
                // this.edgeTo[n] = v;
                this.marked[n] = true;
                queue.push(n);
            }
        }
        // console.log(queue)
    }
}

//최단 경로 찾기
function bfsUpgrade(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v != undefined) {
            console.log("Visited vertex:" + v);
        }

        for (var w in this.adj[v]) {
            var n = tis.adj[v][w];
            if (!this.marked[n]) {
                this.edgeTo[n] = v;
                this.marked[n] = true;
                queue.push(n);
            }
        }
    }
}


function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
}

function hasPathTo(v) {
    return this.marked[v];
}
var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

g.bfs(0);




