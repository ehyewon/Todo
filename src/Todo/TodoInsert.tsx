import { useState, type FormEvent, type ChangeEvent } from "react"

// ✅ 새로운 할 일을 입력받는 컴포넌트
export default function TodoInsert({ onAdd }: { onAdd: (text: string) => void }) {
    // 입력창에 입력된 문자열을 상태로 관리
    const [value, setValue] = useState("")

    // 입력값이 바뀔 때마다 value 상태 업데이트
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    // form 제출 시(App으로 전달)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault() // 페이지 새로고침 방지
        const text = value.trim()
        if (!text) return // 공백 입력 방지
        onAdd(text)       // 상위(App)의 onAdd 호출 → 새로운 할 일 추가
        setValue("")      // 입력창 초기화
    }

    return (
        <form
            onSubmit={onSubmit}
            style={{ display: "flex", gap: "8px", marginBottom: "16px" }}
        >
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="할 일을 입력하고 Enter"
                style={{
                    flex: 1,
                    padding: "8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                type="submit"
                style={{
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 12px",
                    cursor: "pointer",
                }}
            >
                추가
            </button>
        </form>
    )
}
