import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';



const AddTodo = ({ todo, setTodo }) => {

  const [value, setValue] = useState('')

  const saveTodo = () => {
    setTodo(
      [...todo, {
        id: uuidv4(),
        title: value,
        status: true
      }]
    )
    setValue('')
  }
  return (
    <div>
      <input placeholder="введите задачу" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  )
}

export default AddTodo