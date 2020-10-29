import React from "react";
//import './components/Todo.css'

const Todo = (props) => {
	const complete = (e) => {
		props.completeItem(props.list.id);
	};

	return  <div 
			  onClick={complete}
			  className={`item${props.list.completed ? " completed" : ""}`}
			>
			  {props.list.task}
			  
		    </div>;
	
};

export default Todo;