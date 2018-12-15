'use strict';

/* global ReactDOM */

var multiplier = {
  numbers: [1, 2, 42, 88],
  multiplyBy: 12,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (n) {
      return n * _this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());

var app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var user = {
  name: 'Manuel',
  age: 30,
  location: 'Seattle'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'dt',
        null,
        'Location'
      ),
      React.createElement(
        'dd',
        null,
        location
      )
    );
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    (app.options || []).length > 0 ? 'Here are your options:' : 'No options'
  ),
  React.createElement(
    'dt',
    null,
    'Name'
  ),
  React.createElement(
    'dd',
    null,
    user.name || 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'div',
    null,
    React.createElement(
      'dt',
      null,
      'Age'
    ),
    React.createElement(
      'dd',
      null,
      user.age
    )
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
