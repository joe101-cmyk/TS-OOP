"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    username;
    age;
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }
    great() {
        return `I am ${this.username}`;
    }
}
class student extends person {
    track;
    constructor(username, age, track) {
        super(username, age);
        this.track = track;
    }
    great() {
        return super.great() + `track${this.track}`;
    }
}
const obj = new student("ahmed", 30, "Web");
console.log(obj);
//# sourceMappingURL=main.js.map