import React from 'react'
import Modal from 'react-modal'

const OptionModal = props => (
  <Modal
    ariaHideApp={false}
    className='modal'
    closeTimeoutMS={200}
    contentLabel="Selected Option"
    isOpen={!!props.option}
    onRequestClose={props.handleClearSelectedOption}
  >
    <h3 className='modal__title'>Selected Option</h3>
    <p className='modal__body'>{props.option}</p>
    <button
      className='button'
      onClick={props.handleClearSelectedOption}
    >
      Okay
    </button>
  </Modal>
)

export default OptionModal
