/* global React, ReactDOM, localStorage */

class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.handlePlusOne = this.handlePlusOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.state = {
      count: props.count
    }
  }

  componentDidMount () {
    const data = localStorage.getItem('counter:count')
    const count = parseInt(data, 10)

    if (!isNaN(count)) {
      this.setState(() => ({ count }))
    }
  }
  componentDidUpdate (prevProps, prevState) {
    const {count} = this.state
    if (prevState.count != count) {
      localStorage.setItem('counter:count', count)
    }
  }

  handlePlusOne (e) {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }
  handleMinusOne (e) {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }
  handleReset (e) {
    this.setState(() => ({ count: 0 }))
  }

  render () {
    return (
      <div className='Counter'>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}
Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'))
