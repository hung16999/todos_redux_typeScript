import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import DisplayTask from './Display'
import InsertTask from './Insert'

const TodoApp = (): any => {
  return (
    <Provider store={store}>
      <h2>to do app</h2>
      <InsertTask />
      <DisplayTask />
    </Provider>
  )
}

export default TodoApp
