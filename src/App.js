import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  // constructor with state
  constructor() {
		super();
		this.state = { toDo: todos };
	}

  // code that marks the item as complete
	completeItem = (itemID) => {
		this.setState({
			toDo: this.state.toDo.map((item) => {
				if (item.id === itemID) {
					return {
						...item,
						completed: !item.completed,
					};
				} else {
					return item;
				}
			}),
		});
	};

  addToDo = (name) => {
		this.setState({
			toDo: [
				...this.state.toDo,
				{
					task: name,
					id: this.state.toDo.length,
					completed: false,
				},
			],
		});
	};

	clearCompleted = () => {
		this.setState({
			toDo: this.state.toDo.filter((item) => !item.completed),
		});
	};
	
	render() {
		console.log(this.state);
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList
					item={this.state.toDo}
					completeItem={this.completeItem}
					clearItem={this.clearCompleted}
				/>
				<TodoForm submitHandler={this.addToDo} />
			</div>
		);
	}
}


export default App;
