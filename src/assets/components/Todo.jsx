import React from 'react'

function Todo({todo , index , delTodo}) {
  return (
    <div className="todo">
        <p>{todo}</p>
        <div className="actions">
          
          <button onClick={()=> delTodo(index)}>Done</button>
        </div>
      </div>
  )
}

export default Todo
