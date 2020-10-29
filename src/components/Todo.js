import React from "react";
//import './components/Todo.css'

const Todo = (props) => {
	const complete = (evt) => {
		props.completeItem(props.list.id);
	};

	return  <div 
			  onClick={complete}
			  
			>
			  {props.list.task}
			  
		    </div>;
	
};

export default Todo;