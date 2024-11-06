import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, List, Checkbox } from 'antd'
import { addTodo, deleteTodo, toggleTodo } from './redux/actions'

function App() {
  const [task, setTask] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task))
      setTask('')
    }
  }

  return (
    <div className="App" style={{ width: 400, margin: '50px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="todo-input" style={{ marginBottom: '20px' }}>
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter new task"
          style={{ marginBottom: '10px' }}
        />
        <Button onClick={handleAddTodo} type="primary" block>
          Add Todo
        </Button>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Checkbox
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
              }
              title={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default App
