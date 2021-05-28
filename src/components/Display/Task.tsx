import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, toggleCompleted } from '../../redux/action'
import { todo } from '../../redux/reducer'

export interface listItemProps {
  task: todo
}

const Task: FC<listItemProps> = ({ task }) => {
  const dispatch = useDispatch()

  const completeTask = () => {
    dispatch(toggleCompleted(task))
  }

  const deleteTask = () => {
    dispatch(removeTask(task))
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={completeTask}
        />
        {task.name}
      </label>
      <button onClick={deleteTask}>X</button>
    </div>
  )
}

export default Task
