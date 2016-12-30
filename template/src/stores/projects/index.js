import _ from 'underscore'
import axios from 'axios'

export default function () {
  let state = { names: [] }

  this.getState = function () {
    return state
  }

  // actions
  this.listProjects = function () {
    axios.get('static/todos.json').then(function (response) {
      state.names = _.keys(response.data.data.projects)
    })
  }
}
