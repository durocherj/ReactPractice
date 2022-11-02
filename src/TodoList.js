import React from 'react'
import Todo from './Todo'



export default function TodoList({todolist}) {
  return (
    todolist.map(todo =>{
        return <Todo key={todo.id} todo={todo}/>
    })
  )
}
