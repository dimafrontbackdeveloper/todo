import Task from './Task/Task';

function Tasks({ tasks, deleteTask }) {
  return (
    <div className="tasks" style={{ marginTop: '50px' }}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default Tasks;
