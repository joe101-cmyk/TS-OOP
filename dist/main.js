"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    display() {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
}
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    deleteNote(note) {
        console.log(`Note with id ${note.id} deleted`);
    }
    editNote(note, newContent) {
        note.content = newContent;
        console.log(`Note updated successfully`);
    }
}
class Note {
    id;
    name;
    title;
    content;
    user_id;
    user;
    constructor(id, name, title, content, user_id, user) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.content = content;
        this.user_id = user_id;
        this.user = user;
    }
    preview() {
        return this.content.substring(0, 30) + "------";
    }
}
//# sourceMappingURL=main.js.map