<template>
  <input type="text" v-model.trim="text" @keyup.enter="onEnter"></input>
</template>

<script>
export default {
  data () {
    return {text: ''} // internal state
  },

  methods: {
    onEnter () {
      if (this.text) {
        this.$emit('add-text', this.text) // custom event
        this.text = ''
      }
    }
  }
}
</script>
