import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdOutlineFileDownloadDone } from "react-icons/md";

function AddTodo({ handlerAddButton }) {
  // Use ref
  const todoNameElement = useRef();
  const dateElement = useRef();

  const AddButton = (event) => {
    let todoName = todoNameElement.current.value;
    let date = dateElement.current.value;
    todoNameElement.current.value = "";
    dateElement.current.value = "";
    handlerAddButton(todoName, date);
  };

  return (
    <div className="container text-center mx-2">
      <div className="row p-4 mx-2 text-start">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={`${styles["todo-input"]}`}
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={`${styles["todo-input"]}`}
            ref={dateElement}
          />
        </div>
        <div className="col-2">
          <button
            className={`${styles["todo-btn"]} btn btn-success`}
            onClick={AddButton}
          >
            <span className="py-5"> Add </span>  
            <MdOutlineFileDownloadDone className="fs-4 " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
