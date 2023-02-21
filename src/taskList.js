class TaskList {
    constructor() {
        this.tasks = [];
    }

    createNewTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask);
    }

    renderTasks() {
        // const sortedTasks = this.tasks.sort((a, b) => a.name.localeCompare(b.name)); //sort the tasks alphabetically (task failed)
        return this.tasks.map((task) => task.render()).join("");
    }

    deleteTask(description) {
        this.tasks = this.tasks.filter((task) => task.description !== description);
}
}