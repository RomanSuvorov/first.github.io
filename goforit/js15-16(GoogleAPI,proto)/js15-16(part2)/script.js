/**
 * Created by Roman on 09.02.2017.
 */


function Human() {
    this.name = 'Taras';
    this.age = 18;
    this.gander = 'male';
    this.grouth = 180;
    this.weight = 75;
}

var human = new Human();

function Worker(workplace,salary) {
    this.workplace = workplace;
    this.salary = salary;
    this.work = function () {
        console.log(this.name + ' work at ' + workplace);
    }
}
Worker.prototype = new Human();
worker1 = new Worker('Google', 10000);
worker2 = new Worker('Mail.Ru', 5000);


function Student(placeOfStudy,stipend) {
    this.placeOfStudy = placeOfStudy;
    this.stipend = stipend;
    this.watchSerials = function () {
        console.log(this.name + ' watches TV serials at ' + placeOfStudy);
    }
}
Student.prototype = new Human();
student1 = new Student('KPI',1100);
student2 = new Student('KNU',1100);

console.log("worker1", worker1);
console.log("worker2", worker2);
console.log("student1", student1);
console.log("student2", student2);
console.log("Human.name", human.name);
console.log("Human.age", human.age);
console.log("student1.name", student1.name);
console.log("worker1.age", worker1.age);
