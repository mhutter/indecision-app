import React from 'react'

const Option = props => (
  <li>
    {props.description}
    <button onClick={() => props.onDelete(props.description)}>
      remove
    </button>
  </li>
)

export default Option
