import { Link, useNavigate, useParams } from "react-router-dom"
import NotFound from "./NotFound"
import { useState } from "react"

function TaskDetails({ tasksArray, onDelete }) {

    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const { taskId } = useParams()
    const navigate = useNavigate()

    const task = tasksArray.find((taskObj) => {
        return String(taskObj.id) === String(taskId)
    })

    const handleConfirmDelete = () => {
        onDelete(task.id)
        navigate("/")
    }

    const handleCancelDelete = () => {
        setShowDeleteModal(false)
    }

    if (!task) {
        return (
            <NotFound />
        )
    }

    return (
        <div className="task-details">
            <h1>{task.title}</h1>
            <p>👤 <strong>Assignee: </strong>{task.assignee.toUpperCase()}</p>
            <p>📝 <strong>Description: </strong>{task.description}</p>
            <p>📊 <strong>Status: </strong>{task.status} {
                task.status === "To Do"
                    ? "📋"
                    : task.status === "In Progress"
                        ? "⏳"
                        : "✅"
            }</p>
            <p>⚡ <strong>Priority: </strong>{task.priority}{
                task.priority === "Low"
                    ? "🟢"
                    : task.priority === "Medium"
                        ? "🟡"
                        : "🔴"
            }
            </p>
            <p><strong>Create Date: </strong>{task.createdDate}</p>
            <p><strong>Due Date: </strong>{task.dueDate}</p>

            <div>
                <button onClick={() => setShowDeleteModal(true)}>DELETE</button>
                <Link to="/">
                    <button>BACK</button>
                </Link>
                <Link to={`/tasks/${task.id}/edit`}>
                    <button>EDIT</button>
                </Link>
            </div>

            {showDeleteModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Are you sure?</h3>
                        <p>This task will be permanently deleted.</p>

                        <div className="modal-buttons">
                            <button onClick={handleConfirmDelete}>
                                Yes
                            </button>
                            <button onClick={handleCancelDelete}>
                                No
                            </button>                            
                        </div>
                    </div>
                </div>
            )}



        </div>

    )
}

export default TaskDetails