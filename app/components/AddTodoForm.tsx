'use client'

import { useState, FormEvent } from 'react'
import { useTodos } from '@/app/context/TodoContext'

export default function AddTodoForm() {
  const [text, setText] = useState('')
  const { addTodo } = useTodos()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <div className='flex gap-2'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add a new todo...'
          className='flex-1 px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all'
          aria-label='New todo'
        />
        <button
          type='submit'
          className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900'
        >
          Add
        </button>
      </div>
    </form>
  )
}
