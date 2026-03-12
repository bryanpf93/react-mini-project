import "./ListTasks.css"
import TaskCard from "../components/TaskCard"

function ListTasks({tasksArray,onDelete}){

   

    return(
    <div className="tasks-container">
        {tasksArray.map((taskObj) => {
            return (
              <TaskCard 
                taskDetails={taskObj}
                key={taskObj.id}
                handleDelete={onDelete}
              />

            )
        })}

    </div>
    )
}

export default ListTasks