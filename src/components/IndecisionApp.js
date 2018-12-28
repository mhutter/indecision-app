/* global localStorage */
import React, { Component } from 'react'

import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('indecision:options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) { }
  }

  componentDidUpdate (prevProps, prevState) {
    const { options } = this.state
    if (prevState.options.length !== options.length) {
      localStorage.setItem('indecision:options', JSON.stringify(options))
    }
  }

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }))
  }

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) >= 0) {
      return 'This option already exists'
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }))
  }

  handleDeleteOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(e => e !== option)
    }))
  }

  handlePick = () => {
    const options = this.state.options
    const id = Math.floor(Math.random() * options.length)
    const selectedOption = options[id]
    this.setState(() => ({ selectedOption }))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  render () {
    return (
      <div>
        <Header subtitle='Put your life in the hands of a computer' />
        <Action
          onPick={this.handlePick}
          hasOptions={this.state.options.length > 0} />
        <Options
          onRemoveAll={this.handleRemoveAll}
          onDeleteOption={this.handleDeleteOption}
          options={this.state.options} />
        <AddOption onAddOption={this.handleAddOption} />
        <OptionModal
          option={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption} />
      </div>
    )
  }
}
IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp
