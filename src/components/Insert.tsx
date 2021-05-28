import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { addTask } from '../redux/action'
import { todo } from '../redux/reducer'

const InsertTask: FC = (): any => {
  const [name, setName] = useState<string>('')

  const dispatch = useDispatch()

  const addNewTask = (event: any) => {
    event.preventDefault()
    const newTask: todo = {
      id: v4(),
      name: name,
      completed: false,
      tag: 'home',
    }

    dispatch(addTask(newTask))
    setName('')
  }

  return (
    <>
      <form onSubmit={addNewTask}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={addNewTask}>+</button>
      </form>
    </>
  )
}

export default InsertTask
