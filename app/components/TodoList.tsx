'use client'

import { useTodos } from '@/app/context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos, isLoading } = useTodos()

  if (isLoading) {
    return (
      <div className='text-center py-12'>
        <div className='inline-block w-8 h-8 border-4 border-zinc-300 dark:border-zinc-700 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin'></div>
        <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400'>
          Loading todos...
        </p>
      </div>
    )
  }

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
