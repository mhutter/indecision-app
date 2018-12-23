/* global React, ReactDOM */

class VisibilityToggle extends React.Component {
  constructor (props) {
    super(props)

    this.toggleVisibility = this.toggleVisibility.bind(this)

    this.state = {
      visible: false
    }
  }

  toggleVisibility () {
    this.setState(prevState => ({ visible: !prevState.visible }))
  }

  render () {
    return (
      <div className='VisibilityToggle'>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visible ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visible && (
          <p>Now you see me!</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
