// Reducers (supposedly pure functions, but...)

// name (todos, *args) { return todos; }
export function addTodo (todos, description) {
  todos.push({ description: description })
  return todos
}

export function removeTodo (todos, id) {
  todos.splice(id, 1)
  return todos
}
