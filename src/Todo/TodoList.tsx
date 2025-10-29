import type { Todo } from '../App'
import TodoItem from './TodoItem'

// ✅ TodoList 컴포넌트
// App에서 전달받은 todos 배열을 기반으로 TodoItem들을 렌더링
export default function TodoList({
    todos,
    onToggle,
    onRemove,
}: {
    todos: Todo[]
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}) {
    // 할 일이 하나도 없을 때 문구 표시
    if (todos.length === 0)
        return (
            <p style={{ textAlign: 'center', color: '#777' }}>
                등록된 할 일이 없습니다.
            </p>
        )

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((t) => (
                <TodoItem
                    key={t.id}
                    todo={t}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    )
}
