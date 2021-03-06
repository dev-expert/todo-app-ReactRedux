import '../styles/TodoList.css';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoFilter from './TodoFilter';
import {
  getNumberOfTodos,
  getNumberOfCompleted,
  getFilterTodos
} from '../selectors';

class TodoList extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <TodoFilter />
        <ul className="todolist">
          {this.props.todos.map((todo, index) => (
            <Todo key={index} {...todo} />
          ))}
        </ul>
        <div className="summarize">
          {this.props.numberOfCompleted} / {this.props.numberOfTodos} completed
        </div>
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  numberOfCompleted: PropTypes.number.isRequired,
  numberOfTodos: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    todos: getFilterTodos(state),
    numberOfCompleted: getNumberOfCompleted(state),
    numberOfTodos: getNumberOfTodos(state)
  };
};

export default connect(mapStateToProps)(TodoList);
