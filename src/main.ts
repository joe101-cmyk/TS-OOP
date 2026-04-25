class User {
    public notebooks: Notebook[] = [];

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

    addNotebook(notebook: Notebook): void {
        this.notebooks.push(notebook);
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

class Notebook {
    private notes: Note[] = [];

    constructor(public id: number, public name: string) {}

    addNote(note: Note): void {
        this.notes.push(note);
        console.log("Note added successfully");
    }

    removeNote(noteId: number): void {
        this.notes = this.notes.filter(note => note.id !== noteId);
        console.log(`Note with id ${noteId} removed`);
    }

    getAllNotes(): Note[] {
        return this.notes;
    }
}

class Storage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getAllItems(): T[] {
        return this.items;
    }
}