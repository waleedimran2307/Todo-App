import styles from "./TodoItems.module.css";
import { FaDeleteLeft } from "react-icons/fa6";

function TodoItems({ todoName, todoDate, Id, handlerDeleteButton }) {
  return (
    <div className="  bg-secondary m-3">
      <div className={`${styles["todo-content"]} row mx-4 py-4 text-start`}>
        <div className="col-1 d-flex gap-1">
          Task:<p style={{ background: "grey" }}>{Id}</p>
        </div>
        <div className="col-5 d-flex gap-1">
          Title:<p style={{ background: "grey" }}> {todoName} </p>
        </div>
        <div className="col-4 d-flex gap-1">
          Date:<p style={{ background: "grey" }}>{todoDate} </p>
        </div>
        <div className="col-2">
          <div
            className={`${styles["todo-btn"]} btn btn-danger px-2  `}
            onClick={() => {
              handlerDeleteButton(Id);
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
