import React, { useState } from "react"


const TodoList = ({ todo, setTodo }) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter(item => item.id !== id)
    setTodo(newTodo)
  }

  const isEditing = (id) => {
    return edit === id
  }

  const editTodo = (id, title) => {
    setEdit(id)
    setValue(title)
  }

  const saveTodo = (id) => {
    let newTodo = [...todo].map(item => {
      if (item.id === id) {
        item.title = value
      }
      return item
    })
    setTodo(newTodo)
    setEdit(null)
  }

  const renderTodoItem = (item) => {
    if (isEditing(item.id)) {
      return (
        <div>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <div>
            <button onClick={() => saveTodo(item.id)}>Сохранить</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {item.title}
          <div>
            <button onClick={() => deleteTodo(item.id)}>Удалить</button>
            <button onClick={() => editTodo(item.id, item.title)}>Редактировать</button>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {todo.map(item => (
        <div key={item.id}>
          {renderTodoItem(item)}
        </div>
      ))}
    </div>
  )
}

export default TodoList