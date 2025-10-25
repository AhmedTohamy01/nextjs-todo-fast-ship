'use client'

import { Todo } from '@/app/types/todo'
import { useTodos } from '@/app/context/TodoContext'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodos()

  return (
    <div className='flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className='w-5 h-5 rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 cursor-pointer'
        aria-label={`Mark "${todo.text}" as ${
          todo.completed ? 'incomplete' : 'complete'
        }`}
      />
      <span
        className={`flex-1 text-zinc-900 dark:text-zinc-100 transition-all ${
          todo.completed ? 'line-through text-zinc-400 dark:text-zinc-600' : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className='px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500'
        aria-label={`Delete "${todo.text}"`}
      >
        Delete
      </button>
    </div>
  )
}
