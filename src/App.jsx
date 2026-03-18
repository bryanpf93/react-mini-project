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
import EditTask from "./pages/EditTask"



function App() {

  const [tasksToDisplay, settasksToDisplay] = useState(tasks)
  const [showModal, setShowModal] = useState(false)


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

    settasksToDisplay(newList)

  }

  const updateStatus = (taskId, newStatus) => {
    // Recorremos todas las tareas
    const updatedTasks = tasksToDisplay.map((task) => {
      // Comprobamos si la tarea actual NO es la que queremos actualizar
      if (String(task.id) !== String(taskId)) {
        return task
      }
      // Si es la tarea correcta, creamos una copia con el nuevo status
      const updatedTask = {
        ...task,
        status: newStatus
      }
      return updatedTask
    })

    
    // Actualizamos el estado con el nuevo array de tareas
    settasksToDisplay(updatedTasks)

  }

  const updateTask = (updatedTask) => {
    const updateList = tasksToDisplay.map((task) => {
      if(String(task.id) !== String(updatedTask.id)){
        return task
      }
      return updatedTask
    })
    settasksToDisplay(updateList)
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
                <div className="add-button">
                  <button onClick={() => setShowModal(true)}>+ Add Task</button>
                </div>


                {showModal && (
                  <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                      <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
                      <AddTask onCreate={(newTask) => {
                        createTask(newTask)
                        setShowModal(false)
                      }} />
                    </div>
                  </div>
                )}



                <div className="kanban-board">

                  <div className="todo-column">
                    <h3>TO DO</h3>
                    <TaskList
                      status="To Do"
                      tasksArray={tasksWithStatusToDo}
                      onUpdateStatus={updateStatus}
                    />
                  </div>

                  <div className="inprogress-column">
                    <h3>IN PROGRESS</h3>
                    <TaskList
                      status="In Progress"
                      tasksArray={tasksWithStatusInProgress}
                      onUpdateStatus={updateStatus}
                    />
                  </div>

                  <div className="done-column">
                    <h3>DONE</h3>
                    <TaskList
                      status="Done"
                      tasksArray={tasksWithStatusDone}
                      onUpdateStatus={updateStatus}
                    />
                  </div>


                </div>
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/tasks/:taskId" element={<TaskDetails tasksArray={tasksToDisplay} onDelete={deleteTasks} />} />
          <Route path="/tasks/:taskId/edit" element={<EditTask tasksArray={tasksToDisplay} onUpdate={updateTask} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer></Footer>

    </>
  )
}

export default App
