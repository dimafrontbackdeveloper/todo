import './../../App.css';

function AddTaskForm({ inputValue, addTask, inputChange, inputPlaceholder }) {
  return (
    <>
      <form
        className="d-flex"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          placeholder={inputPlaceholder}
          className="form-control"
          style={{ width: '20%', marginRight: '20px' }}
          type="text"
          value={inputValue}
          onChange={inputChange}
        />
        <button className="btn btn-primary" type="button" onClick={addTask}>
          Add task
        </button>
      </form>
    </>
  );
}

export default AddTaskForm;
