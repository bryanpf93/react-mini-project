import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskList from "./pages/TaskList"
import SidebaR from "./components/Sidebar"
import { useState } from "react"
import tasks from "./data/tasks.json"
import About from "./pages/About"
import TaskDetails from "./pages/TaskDetails"
import NotFound from "./pages/NotFound"
import AddTask from "./pages/AddTask"



function App() {

  const [tasksToDisplay, settasksToDisplay] = useState(tasks)

  const tasksWithStatusToDo = tasksToDisplay.filter((task) => {
    return task.status === "To Do"
  })

  const tasksWithStatusInProgress = tasksToDisplay.filter((task) => {
    return task.status === "In Progress"
  })

  const tasksWithStatusDone = tasksToDisplay.filter((task) => {
    return task.status === "Done"
  })



  const createTask = (newTaskDetails) => {
    const taskIds = tasksToDisplay.map((taskObj) => {
      return taskObj.id
    })

    const maxId = Math.max(...taskIds)
    const nextId = maxId + 1

    const newTaskWithId = {
      ...newTaskDetails,
      id: nextId,
    }

    const newList = [newTaskWithId, ...tasksToDisplay]

    settasksToDisplay (newList)

  }


  const deleteTasks = (taskId) => {
    const filteredTasks = tasksToDisplay.filter((task) => {
      return task.id !== taskId
    })
    settasksToDisplay(filteredTasks)
  }

  return (
    <>
      <Header></Header>
      <SidebaR></SidebaR>
      
      
      <div className="page-container">

        <Routes>
          <Route
            path="/"
            element={
              <>
              <AddTask onCreate={createTask}></AddTask>
              <div className="kanban-board">



                <div className="todo-column">
                  <TaskList
                    status="To Do"
                    tasksArray={tasksWithStatusToDo}
                    onDelete={deleteTasks}
                  />
                </div>

                <div className="inprogress-column">
                  <TaskList
                  status="In Progress"
                  tasksArray={tasksWithStatusInProgress}
                  onDelete={deleteTasks}
                />
                </div>
                
                <div className="done-column">
                  <TaskList
                  status="Done"
                  tasksArray={tasksWithStatusDone}
                  onDelete={deleteTasks}
                />
                </div>
                

              </div>
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/tasks/:taskId" element={<TaskDetails tasksArray={tasksToDisplay} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer></Footer>

    </>
  )
}

export default App
