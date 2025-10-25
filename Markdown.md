# Simple To-Do App MVP

## Architecture Overview

**State Management**: Context API with local storage sync
**Data Structure**: `{ id: string, text: string, completed: boolean }`
**Component Structure**: Provider → Page → Form + List → Items

## Implementation Steps

### 1. Create Type Definitions

Create `app/types/todo.ts` with Todo interface

### 2. Build Context Provider

Create `app/context/TodoContext.tsx`:

- State: todos array
- Actions: addTodo, toggleTodo, deleteTodo
- Effects: Sync with localStorage on mount and updates
- Use 'use client' directive (Context requires client component)

### 3. Create Components

All in `app/components/` directory (client components):

**AddTodoForm.tsx**:

- Controlled input with submit handler
- Clear input after adding
- Simple, accessible form

**TodoList.tsx**:

- Map over todos from context
- Render TodoItem for each
- Show empty state if no todos

**TodoItem.tsx**:

- Display todo text with checkbox and delete button
- Toggle complete on checkbox change
- Delete on button click
- Visual styling for completed state (strikethrough)

### 4. Update Main Page

Update `app/page.tsx`:

- Wrap app with TodoProvider
- Render AddTodoForm and TodoList
- Clean, centered layout with Tailwind

### 5. Styling

Use Tailwind CSS for:

- Clean, modern card-based layout
- Responsive design
- Hover states and transitions
- Accessible focus states

## Key Design Decisions

**Why Context API?**: Simple, built-in, no external deps, perfect for MVP
**Why local storage?**: Immediate persistence without backend complexity
**Component separation**: Easy to test, reuse, and extend later
**Client components**: Context and browser APIs require client-side
**TypeScript**: Type safety prevents bugs as we scale

## Future Extensions Ready

- Easy to swap Context for Supabase/database later
- Component structure supports filtering/sorting features
- Can add edit functionality to TodoItem
- Ready for authentication wrapper around provider