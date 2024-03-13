export class Todo {

    title: String;
    description: String;
    completed: boolean;

    constructor(title: String, description: String, completed: boolean) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}
