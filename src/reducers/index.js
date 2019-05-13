'use strict'

/**
 * Dependencies
 */

const actions = require('../actions/index')

/**
 * Constants
 */

const INCREMENT = actions.INCREMENT
const DECREMENT = actions.DECREMENT
const initialState = { count: 0 }

/**
 * Define reducer
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1}
    case DECREMENT:
      return { count: state.count - 1}
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = reducer
