import { Link } from "react-router-dom"

function TaskCard({ taskDetails, handleDelete}) {
    return (
        <div className="card">
            <h2>{taskDetails.title} </h2>
            <p>Status: {taskDetails.status} {
                taskDetails.status === "To Do"
                    ? "📋"
                    : taskDetails.status === "In Progress"
                        ? "⏳"
                        : "✅"
            }</p>
            <p>Priority: {taskDetails.priority}{
                taskDetails.priority === "Low"
                    ? "🟢"
                    : taskDetails.priority === "Medium"
                        ? "🟡"
                        : "🔴"
            }
            </p>
            <div>
                <button onClick={() => {handleDelete(taskDetails.id)}}>DELETE</button>
                <Link to={`/tasks/${taskDetails.id}`}>
                    <button>MORE DETAILS</button>
                </Link>
                
            </div>
            
            
        </div>
    )
}

export default TaskCard