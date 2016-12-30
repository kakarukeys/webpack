import axios from 'axios'
import { addTodo, removeTodo } from './reducers'

export default function () {
  let state = { todos: [] }

  this.getState = function () {
    return state
  }

  // actions
  this.listTodos = function ({ projectName }) {
    axios.get('static/todos.json').then(function (response) {
      state.todos = response.data.data.projects[projectName]
    })
  }

  this.addTodo = function ({ projectName, description }) {
    // simulate calling backend to add a todo
    axios.get('static/todos.json').then(function (response) {
      state.todos = addTodo(state.todos, description)
    })
  }

  this.removeTodo = function ({ projectName, id }) {
    // simulate calling backend to remove a todo
    axios.get('static/todos.json').then(function (response) {
      state.todos = removeTodo(state.todos, id)
    })
  }
}
