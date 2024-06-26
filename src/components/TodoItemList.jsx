import TodoItems from "./TodoItems";

function TodoItemList({ todoItems, handlerDeleteButton }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItems
          Id={item.id}
          todoName={item.name}
          key={item.name}
          todoDate={item.date}
          key1={item.date}
          handlerDeleteButton={handlerDeleteButton}
        ></TodoItems>
      ))}
    </>
  );
}

export default TodoItemList;
