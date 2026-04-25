class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        protected password: string,
        public phone: string,
        public age: number
    ) {}

    display(): void {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
}

class Admin extends User {
    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
    ) {
        super(id, name, email, password, phone, age);
    }

    deleteNote(note: Note): void {
        console.log(`Note with id ${note.id} deleted`);
    }

    editNote(note: Note, newContent: string): void {
        note.content = newContent;
        console.log(`Note updated successfully`);
    }
}

class Note {
    constructor(
        public id: number,
        public name: string,
        public title: string,
        public content: string,
        public user_id: number,
        public user: User
    ) {}

    preview(): string {
        return this.content.substring(0, 30) + "------";
    }
}