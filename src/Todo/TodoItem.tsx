import type { Todo } from '../App'

export default function TodoItem({
    todo,
    onToggle,
    onRemove,
}: {
    todo: Todo
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}) {
    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid #eee',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {/* 체크박스: 완료 상태 토글 */}
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggle(todo.id)}
                />

                {/* 할 일 텍스트 */}
                <span
                    style={{
                        textDecoration: todo.done ? 'line-through' : 'none',
                        color: todo.done ? '#aaa' : '#000',
                        fontSize: '16px',
                    }}
                >
                    {todo.text}
                </span>
            </div>

            {/* 삭제 버튼 */}
            <button
                onClick={() => onRemove(todo.id)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'red',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}
            >
                ✕
            </button>
        </li>
    )
}
