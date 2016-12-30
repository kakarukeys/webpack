import _ from 'underscore'
import Projects from './stores/projects'
import Todos from './stores/todos'

// Main Store
class Store {
  constructor () {
    // stores
    let stores = {
      currentProject: new Todos(),
      projects: new Projects()
    }

    // consolidate all states under same keys as above
    this.state = _.mapObject(stores, s => s.getState())

    // make store methods available thru main store
    _.extend(this, stores)
  }
}

// Shared by all components
// need to use Vue plugin system, if want to avoid singleton pattern
export default new Store()
