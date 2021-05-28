export interface todo {
  id: string | number
  name: string
  tag: string
  completed: boolean
}

interface action {
  type: string
  payload: any
}

const todos: todo[] = [
  { id: 1, name: 'lau nha', tag: 'work', completed: true },
  { id: 2, name: 'uong ruou', tag: 'school', completed: false },
  { id: 3, name: 'hoc react', tag: 'home', completed: true },
]

export const reducer = (initialState = { todos }, action: action): any => {
  switch (action.type) {
    case 'ADD_TASK':
      todos.push(action.payload)
      return { ...initialState, todos: [...todos] }
    case 'DELETE_TASK':
      const index = todos.indexOf(action.payload.id)
      todos.splice(index, 1)
      return { ...initialState, todos: [...todos] }
    case 'COMPLETE_TASK':
      console.log(action.payload)
      const finded = todos.find((task) => task.id === action.payload.id)
      if (finded) {
        finded.completed = !action.payload.completed
      }
      return { ...initialState, todos: [...todos] }
    default:
      return initialState
  }
}
