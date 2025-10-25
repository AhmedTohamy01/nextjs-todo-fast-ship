import { TodoProvider } from '@/app/context/TodoContext'
import AddTodoForm from '@/app/components/AddTodoForm'
import TodoList from '@/app/components/TodoList'

export default function Home() {
  return (
    <TodoProvider>
      <div className='min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black py-8 px-4'>
        <main className='max-w-2xl mx-auto'>
          <div className='mb-8 text-center'>
            <h1 className='text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2'>
              To-Do App
            </h1>
            <p className='text-zinc-600 dark:text-zinc-400'>
              Fast, simple, and persistent todo management
            </p>
          </div>

          <div className='bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-zinc-200 dark:border-zinc-800'>
            <AddTodoForm />
            <TodoList />
          </div>
        </main>
      </div>
    </TodoProvider>
  )
}
