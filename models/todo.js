class Todo {
  constructor(todoText) {
    this.text = todoText;
    this.id = new Date().toISOString();
    this.date = new Date()
    this.completed = false
  }
}

export default Todo
