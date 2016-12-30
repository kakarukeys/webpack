<template>
  <ul>
    <li v-for="(todo, i) in todos">
      <todo-item :todo="todo" @remove-todo="removeTodoById(i)"></todo-item>
    </li>
  </ul>
</template>

<script>
import store from '../store'
import TodoItem from './TodoItem'

export default {
  props: {
    todos: {type: Array, required: true}
  },

  methods: {
    removeTodoById (id) { store.currentProject.removeTodo({id: id}) }  // trigger an action
  },

  components: {
    TodoItem
  }
}
</script>
