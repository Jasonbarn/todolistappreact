import React, { useState } from 'react'



const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
      e.preventDefault();
      if (value){

      addTodo(value)


      setValue('')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Quel sont les tâches pour aujourdhui' />
    <button type="submit" className='todo-btn'>Ajouter tâche</button>
    </form>
  )
}
  
export default TodoForm
