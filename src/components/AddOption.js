import React, { Component } from 'react'

class AddOption extends Component {
  constructor (props) {
    super(props)

    this.handleAddOption = this.handleAddOption.bind(this)

    this.state = {
      error: undefined
    }
  }

  handleAddOption (e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.onAddOption(option)

    this.setState(() => ({ error }))

    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render () {
    return (
      <div className='AddOption'>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption.bind(this)}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

export default AddOption
