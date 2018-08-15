import React from 'react'
import '../css/List.css'
class List extends React.Component {

  handleDelete(id){ this.props.handleDelete(id) }

  render(){
    let list = this.props.list
    let listItem = list.map((item, index) =>
      <li key={item.id} ref={item.id} className="list-item">
        <input type='checkbox' />
        <p className="item-body">{item.body}</p>
        <span
          className="item-delete"
          onClick={this.handleDelete.bind(this, this.props.list[index].id)}>X
        </span>
      </li>
    )
    return <ul>{listItem}</ul>
  }
}

export default List
