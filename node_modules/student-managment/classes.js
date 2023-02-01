class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
export class Course {
    name;
    id = Math.floor(Math.random() * 892734);
    timing;
    fee;
    students = [];
    teacher;
    constructor(name, timing, fee) {
        this.name = name;
        this.timing = timing;
        this.fee = fee;
    }
    registerStudent(student) {
        this.students.push(student);
    }
    addCourseInStudentCourses(student) {
        student.registerInCourse(this);
    }
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    addCourseInTeacherCourses(teacher) {
        teacher.assignCourse(this);
    }
}
export class Student extends Person {
    studentID = Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4)); // 5 digit random number
    balance = 2000;
    courses = [];
    constructor(name, age) {
        super(name, age);
    }
    registerInCourse(course) {
        this.courses.push(course);
        this.submitFee(course.fee);
    }
    addStudentInCourseStudents(course) {
        course.registerStudent(this);
    }
    submitFee(fee) {
        this.balance -= fee;
    }
}
export class Teacher extends Person {
    teacherID = Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4)); // 5 digit random number
    courses = [];
    constructor(name, age) {
        super(name, age);
    }
    assignCourse(course) {
        this.courses.push(course);
    }
    addTeacherInCourseTeacher(course) {
        course.setTeacher(this);
    }
}
