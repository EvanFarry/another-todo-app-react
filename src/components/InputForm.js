import React from 'react'

class InputForm extends React.Component {

  handleChange(e){
    this.props.handleChagne(e.target.value)
  }

  handleSubmit(e){
    e.preventDefault()
    let item = this.refs.new_item.value
    this.props.handleSubmit(item)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          placeholder="add new item"
          ref="new_item"
          value={this.props.newItem}
          onChange={this.handleChange.bind(this)}
        />
      </form>
    )
  }
}

export default InputForm
