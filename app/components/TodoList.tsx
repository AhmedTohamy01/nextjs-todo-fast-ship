'use client'

import { useTodos } from '@/app/context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useTodos()

  if (todos.length === 0) {
    return (
      <div className='text-center py-12 text-zinc-400 dark:text-zinc-600'>
        <p className='text-lg'>No todos yet. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className='space-y-2'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
