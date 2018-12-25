import React from 'react'

const Action = props => (
  <div>
    <button
      onClick={props.onPick}
      disabled={!props.hasOptions}>
      What shoud I do?
    </button>
  </div>
)

export default Action
