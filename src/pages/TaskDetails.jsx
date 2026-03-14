import { Link, useParams } from "react-router-dom"
import NotFound from "./NotFound"

function TaskDetails ({tasksArray}){

    const { taskId } = useParams()

    console.log("taskId:", taskId)
console.log("tasksArray:", tasksArray)

    const task = tasksArray.find((taskObj) => {
        return taskObj.id === parseInt(taskId)
    })

     if (!task) {
    return (
      <NotFound/>
    )
  }
    console.log(task)

    return(
        <div className="task-details">
            <h1>{task.title}</h1>
            <p>ASSIGNEE: {task.assignee}</p>
            <p>{task.description}</p>
            <p>STATUS: {task.status} {
                task.status === "To Do"
                    ? "📋"
                    : task.status === "In Progress"
                        ? "⏳"
                        : "✅"
            }</p>
            <p>PRIORITY: {task.priority}{
                task.priority === "Low"
                    ? "🟢"
                    : task.priority === "Medium"
                        ? "🟡"
                        : "🔴"
            }
            </p>
            <p>CREATE DATE: {task.createdDate}</p>
            <p>DUE DATE: {task.dueDate}</p>

            <Link to="/">
                <button>BACK</button>
            </Link>

        </div>
    )
}

export default TaskDetails