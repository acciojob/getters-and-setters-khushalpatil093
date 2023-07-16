//complete this code
class Person {

	constructor(name, age) {
		this._name = name;
		this._age = age;
	}
	
	get name() {
		return this._name;
	}
	set age(newAge) {
		this._age = newAge;
	}
	get age() {
		return this._age;
	}
	
}

class Student extends Person {
	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

const student1 = new Student("Alice", 20);
const teacher1 = new Teacher("smith", 35);

student1.study();
teacher1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
