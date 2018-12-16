'use strict';

/* global ReactDOM */
var appRoot = document.getElementById('app');
var app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two', 'Three']
};

var render = function render() {
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
      React.createElement(
        'button',
        { onClick: onRemoveAll },
        'Remove All'
      )
    ),
    React.createElement(
      'p',
      null,
      (app.options || []).length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length < 1, onClick: onMakeDecision },
      'What shoud  I do?'
    ),
    (app.options || []).length > 0 && React.createElement(
      'ul',
      null,
      app.options.map(function (i) {
        return React.createElement(
          'li',
          { key: i },
          i
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onAddOption },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

var onAddOption = function onAddOption(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll(e) {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision(e) {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var selected = app.options[randomNum];
  alert(selected);
};

render();
