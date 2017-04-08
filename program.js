function Grades() {
    this.dataStore = [];
    this.add = function (temp) {
        this.dataStore.push(temp);
    }
    this.avg = function () {
        let sum = this.dataStore.reduce((a, b) => {
            return a + b;
        });
        return sum / this.dataStore.length;
    }

    this.reversePrint = function () {
        var reverseData = this.dataStore.reverse();
        console.log(...reverseData);

    }
}

var grades = new Grades();

for (var i = 0; i < 10; i++) {
    grades.add(i);
}

grades.reversePrint();

