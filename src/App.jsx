import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";
import "./App.css";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [newtodoItems, setTodoItems] = useState([]);

  // Add button
  const handlerAddButton = (itemName, itemDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { id: newtodoItems.length + 1, name: itemName, date: itemDate },
    ]);
  };

  // Delete btn
  const handlerDeleteButton = (Id) => {
    const removeItems = newtodoItems.filter((item) => item.id !== Id);

    const updatedItems = removeItems.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    setTodoItems(updatedItems);
  };

  return (
    <center className="todo-container container my-5 mx-auto p-3 w-100">
      <AppName></AppName>
      <AddTodo handlerAddButton={handlerAddButton}></AddTodo>
      <Message todoItems={newtodoItems}></Message>
      <TodoItemList
        todoItems={newtodoItems}
        handlerDeleteButton={handlerDeleteButton}
      ></TodoItemList>
    </center>
  );
}

export default App;
