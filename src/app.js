/* global alert, React, ReactDOM */
class IndecisionApp extends React.Component {
  constructor () {
    super()

    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)

    this.state = {
      options: ['Option A', 'Option B', 'Option C']
    }
  }

  handleRemoveAll () {
    this.setState(() => ({options: []}))
  }

  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) >= 0) {
      return 'This option already exists'
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  handlePick () {
    const options = this.state.options
    const id = Math.floor(Math.random() * options.length)
    alert(options[id])
  }

  render () {
    return (
      <div>
        <Header
          title='Indecision'
          subtitle='Put your life in the hands of a computer' />
        <Action
          onPick={this.handlePick}
          hasOptions={this.state.options.length > 0} />
        <Options
          onRemoveAll={this.handleRemoveAll}
          options={this.state.options} />
        <AddOption onAddOption={this.handleAddOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </header>
    )
  }
}

const Option = props => <li>{props.description}</li>

class Options extends React.Component {
  render () {
    const options = this.props.options
    if (!options) {
      return
    }

    return (
      <div>
        <button onClick={this.props.onRemoveAll}>Remove All</button>
        <ul>
          {options.map(i => <Option key={i} description={i} />)}
        </ul>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <div>
        <button
          onClick={this.props.onPick}
          disabled={!this.props.hasOptions}
        >
          What shoud I do?
        </button>
      </div>
    )
  }
}

class AddOption extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
