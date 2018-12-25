import React from 'react'

import Option from './Option'

const Options = props => {
  if (!props.options) {
    return
  }

  return (
    <div>
      <button onClick={props.onRemoveAll}>Remove All</button>
      {props.options.length < 1 && <p>Add Options below to get started!</p>}
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

export default Options
