import React, { FC } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { todo } from '../../redux/reducer'
import Task from './Task'

const DisplayTask: FC = () => {
  const store = useSelector((store: RootStateOrAny) => store.todos)

  return (
    <>
      {store.map((task: todo) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default DisplayTask
