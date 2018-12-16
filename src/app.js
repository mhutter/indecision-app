/* global ReactDOM */
const app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

const template =
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options || []).length > 0 ? 'Here are your options:' : 'No options'}</p>
  </div>

let count = 0

const addOne = () => {
  count++
  renderCounterApp()
}
const minusOne = () => {
  count--
  renderCounterApp()
}
const reset = () => {
  count = 0
  renderCounterApp()
}

const renderCounterApp = () => {
  const templateTwo = (
    <div className='two'>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot)
}

const appRoot = document.getElementById('app')
renderCounterApp()
