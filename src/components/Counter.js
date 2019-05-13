'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const actions = require('../actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const increment = actions.increment
const decrement = actions.decrement

/**
 * Define component
 */

class Counter extends Component {
  incrementIfOdd = () => {
    // Stretch Problem: Implement an increment function that
    // only increments if the counter value is odd
  }

  incrementAsync = () => {
    // Stretch Problem: Implement an increment function that
    // increments after waiting for one second
  }

  render() {
    // Fill in the two button onClick methods
    // Upon clicking these buttons, the count
    // should decrement or increment accordingly
    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={() => {/* Fill me in */ }}>
            +
        </button>
        <button onClick={() => {/* Fill me in */ }}>
            -
        </button>
         {/* Uncomment these button tags if you got
        around to implementing the extra credit functions */}
        {/* <button onClick={this.incrementIfOdd}>
            Increment if odd
        </button>
        <button onClick={this.incrementAsync}>
            Increment async
        </button>  */}
      </p>
    )
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { increment, decrement })(Counter)
