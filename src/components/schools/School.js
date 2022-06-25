import { v4 as uuid } from 'uuid';

export class School {
    constructor(school, dueDate) {
        this.school = school;
        this.dueDate = dueDate;
        this.createdAt = new Date().toISOString();
        this.isCompleted = false;
        this.id = uuid();
    }
}