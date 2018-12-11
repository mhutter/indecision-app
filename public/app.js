/* global React, ReactDOM */
var template = React.createElement(
  'p',
  null,
  'Hello, JSX!'
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
