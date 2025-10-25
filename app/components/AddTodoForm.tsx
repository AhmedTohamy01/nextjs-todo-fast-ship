'use client'

import { useState, FormEvent } from 'react'
import { useTodos } from '@/app/context/TodoContext'

export default function AddTodoForm() {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const { addTodo } = useTodos()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!text.trim()) {
      setError('Please enter a todo item')
      return
    }

    addTodo(text.trim())
    setText('')
    setError('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    if (error) setError('')
  }

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <div className='flex gap-2'>
        <input
          type='text'
          value={text}
          onChange={handleChange}
          placeholder='Add a new todo...'
          className={`flex-1 px-4 py-3 rounded-lg border ${
            error
              ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-400'
              : 'border-zinc-300 dark:border-zinc-700 focus:ring-blue-500 dark:focus:ring-blue-400'
          } bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all`}
          aria-label='New todo'
          aria-invalid={!!error}
          aria-describedby={error ? 'todo-error' : undefined}
        />
        <button
          type='submit'
          className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900'
        >
          Add
        </button>
      </div>
      {error && (
        <p
          id='todo-error'
          className='mt-2 text-sm text-red-600 dark:text-red-400'
          role='alert'
        >
          {error}
        </p>
      )}
    </form>
  )
}
