import styles from "./TodoItems.module.css";
import { FaDeleteLeft } from "react-icons/fa6";

function TodoItems({ todoName, todoDate, handlerDeleteButton }) {
  return (
    <div className="container w-100 bg-secondary">
      <div className={`${styles["todo-content"]} row p-4 m-2 text-start`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <div
            className={`${styles["todo-btn"]} btn btn-danger px-2 `}
            onClick={() => {
              handlerDeleteButton(todoName);
            }}
          >
            <span className="mx-1">Delete</span>
            <FaDeleteLeft className="fs-3 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
