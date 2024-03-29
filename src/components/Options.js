import React from 'react'

import Option from './Option'

const Options = props => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      <button
        className='button button--link'
        onClick={props.onRemoveAll}
      >
        Remove All
      </button>
    </div>
    {props.options.length < 1 &&
      <p className='widget__message'>Add Options below to get started!</p>
    }
    {props.options.map((option, index) => (
      <Option
        key={option}
        description={option}
        count={index + 1}
        onDelete={props.onDeleteOption} />
    ))}
  </div>
)

export default Options
