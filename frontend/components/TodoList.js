import React from 'react'
import Todo from "./Todo";

export default function TodoList({liste}) {

    return (
      <div>
        <ul>
         {liste.map((todo) => (
           <Todo item={todo} key={todo.id}/>
          ))}
        </ul>
      </div>
    )
}
