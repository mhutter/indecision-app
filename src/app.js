/* global alert, React, ReactDOM, localStorage */
class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)

    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)

    this.state = {
      options: props.options
    }
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('indecision:options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {}
  }

  componentDidUpdate (prevProps, prevState) {
    const {options} = this.state
    if (prevState.options.length !== options.length) {
      localStorage.setItem('indecision:options', JSON.stringify(options))
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

    this.setState(prevState => ({ options: prevState.options.concat(option) }))
  }

  handleDeleteOption (option) {
    this.setState(prevState => ({
      options: prevState.options.filter(e => e !== option)
    }))
  }

  handlePick () {
    const options = this.state.options
    const id = Math.floor(Math.random() * options.length)
    alert(options[id])
  }

  render () {
    return (
      <div>
        <Header subtitle='Put your life in the hands of a computer' />
        <Action
          onPick={this.handlePick}
          hasOptions={this.state.options.length > 0} />
        <Options
          onRemoveAll={this.handleRemoveAll}
          onDeleteOption={this.handleDeleteOption}
          options={this.state.options} />
        <AddOption onAddOption={this.handleAddOption} />
      </div>
    )
  }
}
IndecisionApp.defaultProps = {
  options: []
}

const Header = props => (
  <header>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </header>
)
Header.defaultProps = {
  title: 'Indecision'
}

const Option = props => (
  <li>
    {props.description}
    <button onClick={() => props.onDelete(props.description)}>
      remove
    </button>
  </li>
)

const Options = props => {
  if (!props.options) {
    return
  }

  return (
    <div>
      <button onClick={props.onRemoveAll}>Remove All</button>
      <ul>
        {props.options.map(i => (
          <Option
            key={i}
            description={i}
            onDelete={props.onDeleteOption} />
        ))}
      </ul>
    </div>
  )
}

const Action = props => (
  <div>
    <button
      onClick={props.onPick}
      disabled={!props.hasOptions}>
      What shoud I do?
    </button>
  </div>
)

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
