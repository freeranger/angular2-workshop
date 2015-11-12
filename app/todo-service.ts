export class TodoService {
  todos = [
    {title: 'mow grass', completed: false},
    {title: 'drink cold beverage', completed: false}
  ];

  addTodo(todo) {
    this.todos.push(todo);
  }
}