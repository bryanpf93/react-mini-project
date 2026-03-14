import TaskCard from "../components/TaskCard"

function TaskList({ tasksArray, onDelete}){

    return(
        <>
        {tasksArray.map((taskObj) => {
            return (
              <TaskCard 
                taskDetails={taskObj}
                key={taskObj.id}
                handleDelete={onDelete}
              />
            )
        })}
        </>
    )
}

export default TaskList