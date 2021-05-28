import { todo } from './reducer'

export interface action {
  type: string
  payload: todo
}

export const toggleCompleted = (payload: todo) => {
  return {
    type: 'COMPLETE_TASK',
    payload,
  }
}

export const addTask = (payload: todo): action => {
  return {
    type: 'ADD_TASK',
    payload,
  }
}

export const removeTask = (payload: todo): action => {
  return {
    type: 'DELETE_TASK',
    payload,
  }
}
