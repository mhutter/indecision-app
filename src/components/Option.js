import React from 'react'

const Option = props => (
  <div className='option'>
    <p className='option__text'>{props.count}. {props.description}</p>
    <button
      className='button button--link'
      onClick={() => props.onDelete(props.description)}
    >
      remove
    </button>
  </div>
)

export default Option
