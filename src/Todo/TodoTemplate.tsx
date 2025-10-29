import React from 'react'

// ✅ children을 받아 전체 앱을 감싸는 기본 레이아웃 컴포넌트
export default function TodoTemplate({
    children,
}: {
    children: React.ReactNode
}) {
    // 최소한의 스타일만 적용 (기본 레이아웃 역할)
    const style = {
        width: '400px',
        margin: '60px auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    }

    return <div style={style}>{children}</div>
}
