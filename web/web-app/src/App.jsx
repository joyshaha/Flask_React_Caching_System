import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ContactMe } from "./ContactMe"
import { AboutMe, Education, ProfessionalExp } from "./AboutMe"
import { Demo } from "./Demo"

import { GetTodos } from "./todo/Get"
import { CreatePost } from "./todo/Create"
import { UpdateTodo } from "./todo/Put"

import { GetUsers, GetUserList } from "./user/Get"
import { CreateUser } from "./user/Create"
import { UpdateUser } from "./user/Put"
import { DeleteUser } from "./user/Delete"


function App() {
  return (
    <div>
      {/* <AboutMe />
      <Education />
      <ProfessionalExp />
      <ContactMe />
      <Demo /> */}

      {/* Todo */}
      {/* <GetTodos />
      <CreatePost />
      <UpdateTodo /> */}

      {/* User */}
      <CreateUser />
      <UpdateUser />
      {/* <GetUsers /> */}
      <DeleteUser />
      <GetUserList />
    </div>
  )
}

export default App
