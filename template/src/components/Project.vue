<template>
  <todo-manager :todos="project.todos"></todo-manager>
</template>

<script>
import store from '../store'
import TodoManager from './TodoManager'

export default {
  props: {
    project: {type: Object, required: true}
  },

  methods: {
    fetchData () {
      store.currentProject.listTodos({projectName: this.$route.params.projectName})
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    // call again the method if this component is revisited after a route change
    '$route': 'fetchData'
  },

  components: {
    TodoManager
  }
}
</script>
