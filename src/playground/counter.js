/* global React, ReactDOM */

class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.handlePlusOne = this.handlePlusOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.state = {
      count: 0
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
    console.log('rendering')
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

ReactDOM.render(<Counter />, document.getElementById('app'))