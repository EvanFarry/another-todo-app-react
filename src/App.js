import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid'

//my components
import InputForm from './components/InputForm'
import List from './components/List'


class App extends Component {
  constructor(props){
    super(props)
    this.handleChagne = this.handleChagne.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = { newItem: '', list: [] }
  }

  handleChagne(data){
    this.setState({newItem: data})
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
        <h1>Your To Do List</h1>
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
/*
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
*/
export default App;
