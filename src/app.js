/* global ReactDOM */

const multiplier = {
  numbers: [1, 2, 42, 88],
  multiplyBy: 12,
  multiply () {
    return this.numbers.map(n => n * this.multiplyBy)
  }
}

console.log(multiplier.multiply())

const app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

const user = {
  name: 'Manuel',
  age: 30,
  location: 'Seattle'
}

function getLocation (location) {
  if (location) {
    return <div><dt>Location</dt><dd>{location}</dd></div>
  }
}

const template =
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options || []).length > 0 ? 'Here are your options:' : 'No options'}</p>
    <dt>Name</dt><dd>{user.name || 'Anonymous'}</dd>
    {user.age >= 18 && <div><dt>Age</dt><dd>{user.age}</dd></div>}
    {getLocation(user.location)}
  </div>

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
