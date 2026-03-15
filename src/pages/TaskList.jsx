import TaskCard from "../components/TaskCard"

function TaskList({ tasksArray, onDelete, onUpdateStatus}){

    return(
        <>
        {tasksArray.map((taskObj) => {
            return (
              <TaskCard 
                taskDetails={taskObj}
                key={taskObj.id}
                handleDelete={onDelete}
                onUpdateStatus={onUpdateStatus}
              />
            )
        })}
        </>
    )
}

export default TaskList