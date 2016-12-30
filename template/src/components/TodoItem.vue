<template>
  <div>
    <span>\{{ todo.description }}</span>
    <button @click="onRemove">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {type: Object, required: true}
  },

  methods: {
    onRemove () {
      this.$emit('remove-todo') // custom event
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button {
  margin-left: 0.5em;
}
</style>
