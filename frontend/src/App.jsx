import './App.css'
import {Routes, Route} from "react-router-dom" 
import { ToastContainer } from "react-toastify";

import React from 'react'
import Form from './components/Form'
import TodoTask from './components/TodoTask'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/todo-task' element={<TodoTask />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App