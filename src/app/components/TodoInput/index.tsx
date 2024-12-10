// export default : 다른파일에서 import 해서 들고올수있음
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100% auto;
  font-size: 1.1em;
  border: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;
// todo list 추가하는 props 정의
// TodoInput 컴포넌트에 전달하는 props 정의
// setTodoList 함수는 새로운 todoList를 받아서 기존 todoList에 추가
export default function TodoInput({
  setTodoList,
}: {
  setTodoList: (todoList: ITodoItem) => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <Box>
      <Input
        placeholder="할일을 입력하세요."
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumPadEnter') return;
          setTodoList({
            id: '0',
            completed: false,
            content: content,
            editing: false,
          });
          setContent('');
        }}
      />
    </Box>
  );
}
