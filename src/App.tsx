import { useState, useRef } from 'react'
import TodoTemplate from './Todo/TodoTemplate'
import TodoInsert from './Todo/TodoInsert'
import TodoList from './Todo/TodoList'

export type Todo = {
  id: number
  text: string
  done: boolean
}

export default function App() {
  // ✅ 상태 관리
  const [todos, setTodos] = useState<Todo[]>([])

  // ✅ useRef로 고유 id 관리 (렌더링 시에도 값 유지)
  const nextId = useRef(1)

  // ✅ 추가 기능
  const handleAdd = (text: string) => {
    setTodos(prev => [
      ...prev,
      { id: nextId.current++, text, done: false }
    ])
  }

  // ✅ 완료/미완료 토글
  const handleToggle = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  // ✅ 삭제 기능
  const handleRemove = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // ✅ 하위 컴포넌트에 props 전달
  return (
    <TodoTemplate>
      <h1>Todo List</h1>
      <TodoInsert onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </TodoTemplate>
  )
}
