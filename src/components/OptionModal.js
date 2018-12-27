import React from 'react'
import Modal from 'react-modal'

const OptionModal = props => (
  <Modal
    ariaHideApp={false}
    isOpen={!!props.option}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    <p>{props.option}</p>
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
)

export default OptionModal
