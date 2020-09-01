import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../components/todo/List';
import { toggleTodo } from "../actions";

class AllTodoList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <List todos={this.props.todos} toggleTodo={this.props.toggleTodo}></List>
            </div>
        )
    }
}
  
  const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  });
  
  const mapStateToProps = (state = []) => ({
    todos: state.todos
  });

export default connect(mapStateToProps, mapDispatchToProps)(AllTodoList)
