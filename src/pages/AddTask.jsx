import { useState } from "react"

function AddTask({onCreate}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [assignee, setAssignee] = useState("")
    const [status, setStatus] = useState("To Do")
    const [priority, setPriority] = useState("Low")

    const today = new Date().toISOString().split("T")[0];
    const due = new Date(today);
    due.setDate(due.getDate() + 15);
    const dueDate = due.toISOString().split("T")[0];

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            title: title,
            description: description,
            assignee: assignee,
            status: status,
            priority: priority,
            createdDate : today,
            dueDate: dueDate,
        }

        onCreate(newTask)

        setTitle(""),
        setDescription(""),
        setAssignee("")
        setStatus("To Do")
        setPriority("Low")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <h4>ADD A TASK: </h4>

                    <label>
                        Title:
                        <input
                            name="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                        />
                    </label>

                    <label>
                        Description:
                        <input
                            name="description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </label>

                    <label>
                        Assigne:
                        <input
                            name="assignee"
                            type="text"
                            value={assignee}
                            onChange={(e) => setAssignee(e.target.value)}
                            placeholder="Assignee"
                        />
                    </label>

                    <label>
                        Status:
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

                    <button type="submit">ADD STUDENT</button>
                </div>
            </form>


        </>
    )
}

export default AddTask