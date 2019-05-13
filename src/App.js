'use strict'

/**
 * Dependencies
 */

const React = require('react')
const redux = require('redux')
const react_redux = require('react-redux')
const components = require('./components/index')
const reducers = require('./reducers/index')

/**
 * Constants
 */

const Counter = components.Counter
const Provider = react_redux.Provider
const createStore = redux.createStore

/**
 * Define store
 */

const store = createStore(reducers)

/**
 * Define component
 */

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

/**
 * Export component
 */

module.exports = App
