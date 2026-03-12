import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListTasks from "./pages/ListTasks"
import SidebaR from "./components/Sidebar"
import { useState } from "react"
import tasks from "./data/tasks.json"
import About from "./pages/About"
import TaskDetails from "./pages/TaskDetails"
import NotFound from "./pages/NotFound"



function App() {

  const [tasksToDisplay, settasksToDisplay] = useState(tasks)

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
          <Route path="/" element={<ListTasks tasksArray={tasksToDisplay} onDelete={deleteTasks} />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks/:taskId" element={<TaskDetails tasksArray={tasksToDisplay}/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>

      <Footer></Footer>

    </>
  )
}

export default App
