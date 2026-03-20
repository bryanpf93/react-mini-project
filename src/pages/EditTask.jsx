import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTask({ tasksArray, onUpdate }) {

    const { taskId } = useParams()
    const task = tasksArray.find((taskObj) => {
        return String(taskObj.id) === String(taskId)
    })
    const navigate = useNavigate()

    console.log(task)

    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [assignee, setAssignee] = useState(task.assignee)
    const [priority, setPriority] = useState(task.priority)

    const handleSubmit = (e) => {
        e.preventDefault()
        const updateTask = {
            ...task,
            title: title,
            description: description,
            assignee: assignee,
            priority: priority,
        }

        onUpdate(updateTask)
        navigate(`/tasks/${taskId}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="edit-container">
                    <h2>EDIT TASK: </h2>

                    <label>
                        <strong>Title: </strong>
                        <input
                            name="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>

                    <label>
                        <strong>Description: </strong>
                        <input
                            name="description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>

                    <label>
                        <strong>Assignee: </strong>
                        <input
                            name="assignee"
                            type="text"
                            value={assignee}
                            onChange={(e) => setAssignee(e.target.value)}
                        />
                    </label>

                    <label>
                        <strong>Priority: </strong>
                        <select
                            name="priority"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="">-- None --</option>
                            <option value="Low">Low 🟢</option>
                            <option value="Medium">Medium 🟡</option>
                            <option value="High">High 🔴</option>
                        </select>
                    </label>
                    <div>
                        <button type="submit">SAVE CHANGES</button>
                        <button type="button" onClick={() => navigate(`/tasks/${taskId}`)}>CANCEL</button>
                    </div>

                </div>

            </form>
        </>
    )
}

export default EditTask