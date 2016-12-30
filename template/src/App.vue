<template>
  <div id="app">
    <router-link to="/">Home</router-link>

    <span v-for="name in projects.names">
      | <router-link :to="{ name: 'project', params: { projectName: name }}">\{{ name }}</router-link>
    </span>

    <br><br>

    <router-view :project="currentProject"></router-view>
  </div>
</template>

<script>
import store from './store'
import Project from './components/Project'

export default {
  data () {
    return store.state
  },

  created () {
    store.projects.listProjects()
  },

  components: {
    Project
  }
}
</script>
