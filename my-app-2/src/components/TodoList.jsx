import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'อ่านหนังสือ', completed: true },
        { id: 2, text: 'ออกกำลังกาย', completed: true },
        { id: 3, text: 'ซื้อของใช้เพิ่มเติม', completed: false },
        { id: 4, text: 'ทำงาน Backend & Frontend', completed: false },
        { id: 5, text: 'ซื้อของใช้เพิ่มเติม', completed: false },
        { id: 6, text: 'อ่านเนื้อหาสอบ DBA', completed: true },
        { id: 7, text: 'ซื้อเสื้อผ้า', completed: true },
        { id: 8, text: 'ทำความสะอาดห้อง', completed: false },
        { id: 9, text: 'ทิ้งขยะ', completed: true },
        { id: 10, text: 'เติมน้ำมันรถ', completed: true }
    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>📝 รายการที่ต้องทำในสัปดาห์นี้</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#e8f5e8' : '#fad6d6ff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '❌'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#666' : '#333'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;