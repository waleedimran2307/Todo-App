const Message = ({ todoItems }) => {
  if (todoItems.length === 0) {
    return (
      <div className="container fs-3 w-50 mx-5 my-2 bg-secondary">
        <div className="row p-3">
          <p>Most Welcome!</p>
          <p>Please enter any task! </p>
        </div>
      </div>
    );
  }
};

export default Message;
