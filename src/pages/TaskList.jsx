import TaskCard from "../components/TaskCard"

function TaskList({ tasksArray, onUpdateStatus}){

    return(
        <>
        {tasksArray.map((taskObj) => {
            return (
              <TaskCard 
                taskDetails={taskObj}
                key={taskObj.id}
                onUpdateStatus={onUpdateStatus}
              />
            )
        })}
        </>
    )
}

export default TaskList