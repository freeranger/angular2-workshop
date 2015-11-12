# Exercise 1 - Bootstrap the Todo App!

Create an Angular 2 application that displays an `h1` title “My Todo List” as its template.

Steps:

1. create a class called `TodoApp` in main.ts. 
2. Import the `Component` decorator from `angular2/angular2`
3. Add the `@Component` decorator to the `TodoApp` class
4. in the decorator, add a `selector` property with the value `todo-app`
5. Using a template string, add a `template` property to the decorator containing the `h1` title element
6. Add the element `todo-app` to the index.html
7. import the `bootstrap` method from `angular2/angular2`
8. call `bootstrap(TodoApp)`

# Exercise 2: Create a text input to capture new todos!

We want to create a small form for adding new todos.

Steps:

1. Create an input element of type text
2. Create a button.
3. Create the “add todo” method on the component
4. add an event handler to the button to capture “click” events and call “add todo” method
4. add an element reference to the input
5. pass the value of the input to with the method call in the click handler
6. use ng-model to bind the value of the input to a property on the component class.

# Exercise 3: Create a list 

When we add a new todo, it should be added to a list/array for display and displayed in the dom.

1. Add an array to the component called “todos” with a few example todo strings.
2. When the “add todo” button is clicked, the input text should be pushed onto the array
3. import NgFor and us it to display an unordered (ul) list of todos
4. Look how this is growing!

# Exercise 4: Refactor into components

The todo app is growing and is starting to show its bloat. We can do better by refactoring the app into a couple of components.

1. Extract a `todo-input` component. 
2. Add an @output to the component called “added” that delivers the todo text as its payload
3. extract a `todo-list` component
4. Give it a custom @Input called `todos` that accepts an array of todo items
5. When the event “added” is handled, it should add the todo to the array of todos and update the list

# Exercise 5: Extract the data into a model/store

1. Create a new file and export a `TodoService` class from it
2. move the `todos` array to the new service
3. Add TodoService to the TodoApps providers (be sure to import it!)
4. inject the TodoService into TodoApp
5. Update the array being passed to the list
6. Create an “addTodo” method on the service
7. use this method in the event handler

Something to consider… Should we just inject the service into the sub-components? Is it Better to use inputs/outputs or simply inject it and call the methods/access the properties directly?

To flux, or not to flux?

# Exercise 6: Add ability to “toggle done” on a todo

We want to be able to mark todos as done!

1. Add a “toggle” button element to the list item
2. Add a style to the todo-list component `text-decoration: line-through;`
3. Import ng-class and conditionally apply the style to the todo li
4. UH OH - it’s a string? How do we fix it? We can make todos objects instead of strings. Refactor todos into objects with a TITLE and COMPLETED. BONUS: Make a typed class for todos and use that

# Exercise 7: Add a search component

* create a new component called TodoSearch that includes a box for input of a search term
* create an Output property to expose the term entered by the user
* add the Search component to the TodoApp
* Create an “includesInTitle” Pipe that finds todos that have the search term in the title
* add this pipe to the “todos” input of the TodoList

# Exercise 8: Build a tabs component…

We are going to build a simple tab component