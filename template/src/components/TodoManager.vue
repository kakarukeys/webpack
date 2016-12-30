<template>
  <div>
    <text-input @add-text="addTodo"></text-input>
    <todo-list :todos="todos" v-if="todos.length"></todo-list>
    <p v-else>hurray no task!</p>
  </div>
</template>

<script>
/* Components
 *
 * TodoManager
 *   - TextInput
 *   - TodoList
 *     - TodoItem
 *     - TodoItem
 *     - TodoItem
 */

import store from '../store'
import TextInput from './TextInput'
import TodoList from './TodoList'

export default {
  props: {
    todos: {type: Array, required: true}
  },

  methods: {
    addTodo (text) { store.currentProject.addTodo({ description: text }) }  // trigger an action
  },

  components: {
    TextInput,
    TodoList
  }
}
</script>
