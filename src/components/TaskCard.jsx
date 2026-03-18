import { Link } from "react-router-dom"

function TaskCard({ taskDetails, onUpdateStatus }) {
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
                <Link to={`/tasks/${taskDetails.id}`}>
                    <button>MORE DETAILS</button>
                </Link>
            </div>
            <div>
                {taskDetails.status === "To Do" && (
                    <>
                        <button onClick={() => onUpdateStatus(taskDetails.id, "In Progress")}>⏳ In Progress</button>
                        <button onClick={() => onUpdateStatus(taskDetails.id, "Done")}>✅ Done</button>
                    </>
                )}
                {taskDetails.status === "In Progress" && (
                    <>
                        <button onClick={() => onUpdateStatus(taskDetails.id, "To Do")}>📋 To Do</button>
                        <button onClick={() => onUpdateStatus(taskDetails.id, "Done")}>✅ Done</button>
                    </>
                )}
                {taskDetails.status === "Done" && (
                    <>
                        <button onClick={() => onUpdateStatus(taskDetails.id, "To Do")}>📋 To Do</button>
                        <button onClick={() => onUpdateStatus(taskDetails.id, "In Progress")}>⏳ In Progress</button>
                    </>
                )}
            </div>


        </div>
    )
}

export default TaskCard