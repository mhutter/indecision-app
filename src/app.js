/* global ReactDOM */
const appRoot = document.getElementById('app')
const app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two', 'Three']
}

const render = () => {
  const template =
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p><button onClick={onRemoveAll}>Remove All</button></p>
      <p>{(app.options || []).length > 0 ? 'Here are your options:' : 'No options'}</p>
      <button disabled={app.options.length < 1} onClick={onMakeDecision}>What shoud  I do?</button>
      {((app.options || []).length > 0) && <ul>
        {app.options.map(i => <li key={i}>{i}</li>)}
      </ul>
      }
      <form onSubmit={onAddOption}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>

  ReactDOM.render(template, appRoot)
}

const onAddOption = e => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const onRemoveAll = e => {
  app.options = []
  render()
}

const onMakeDecision = e => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const selected = app.options[randomNum]
  alert(selected)
}

render()
