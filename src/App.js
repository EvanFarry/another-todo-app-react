import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid'

class App extends Component {

  constructor(props){
    super(props)
    this.handleChagne = this.handleChagne.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      newItem: '',
      list:
        []
    }
  }

  handleChagne(data){
    this.setState({
      newItem: data
    })
  }

  handleSubmit(data){
    if (data === "") {
      return false
    } else {
      let updatedList = this.state.list
      updatedList.push({body: data, id: uuid.v4()})
      this.setState({list: updatedList})
      this.setState({newItem: ''})
    }
  }

  handleDelete(id){
    let updatedList = this.state.list
    let index = updatedList.findIndex(each => each.id === id)
    updatedList.splice(index, 1)
    this.setState({ list: updatedList})
  }

  render() {
    return (
      <div className="App">
        <h1>To Do React</h1>
        <List
          list={this.state.list}
          handleDelete={this.handleDelete}
          />

        <InputForm
          newItem={this.state.newItem}
          handleChagne={this.handleChagne}
          handleSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}

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
          ref="new_item"
          value={this.props.newItem}
          onChange={this.handleChange.bind(this)}
        />
      </form>
    )
  }
}

class List extends React.Component {

  handleDelete(id){
    this.props.handleDelete(id)
  }

  render(){
    let list = this.props.list
    let listItem = list.map((item, index) =>
      <li key={item.id} ref={item.id}>
        {item.body}
        <span onClick={this.handleDelete.bind(this, this.props.list[index].id)}> Delete </span>
      </li>
    )
    return( <ul>{listItem}</ul> )
  }
}

export default App;
