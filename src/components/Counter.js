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
    if (this.props.count % 2 !== 0)  {
      this.props.increment()
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      this.props.increment()
    }, 1000)
  }

  render() {
    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={this.props.increment}>
            +
        </button>
        <button onClick={this.props.decrement}>
            -
        </button>
        <button onClick={this.incrementIfOdd}>
            Increment if odd
        </button>
        <button onClick={this.incrementAsync}>
            Increment async
        </button>
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
