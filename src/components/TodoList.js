// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
	const { item, completeItem, clearItem } = props;

	const clearCompleted = () => {
		clearItem();
	};

	return (
		<div className="task-list">
			{item.map((item, ind) => {
				return <Todo list={item} key={ind} completeItem={completeItem} />;
			})}
			<button onClick={clearCompleted}>Clear Completed Items</button>
		</div>
	);
};

export default TodoList;