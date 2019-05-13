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
      // Fill in the body of this case
    case DECREMENT:
      // Fill in the body of this case
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = reducer
