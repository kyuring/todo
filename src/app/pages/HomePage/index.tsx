import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

export function HomePage() {
  // todoList 상태 관리
  // 타입은 : ITodoItem[]
  // 초기값은 ([]) 안에 기입 하는데 현재는 첫번째와 두번째 todoItem 이 있음
  // 상태 변화 함수는 setTodoList
  // 상태 변화 함수는 새로운 todoList를 받아서 기존 todoList에 추가
  // useState 함수는 두개의 인자를 받음
  // 첫번째는 상태 변화 함수
  // 두번째는 초기값
  // setTodoList 함수를 통해서 상태 변화 함수를 호출 할 수 있음
  // setTodoList 함수는 인자로는 두가지를 받는데
  // 첫번째는 새로운 todoList
  // 두번째는 기존 todoList
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([
    {
      id: '1',
      completed: true,
      content: '첫번째 TodoItem',
      editing: false,
    },
    {
      id: '2',
      completed: true,
      content: '두번째 TodoItem',
      editing: true,
    },
  ]);

  // ...todoList : 기존 todoList
  // todo : 새로운 todoItem
  const setTodoLists = (todo: ITodoItem) => {
    setTodoList([todo, ...todoList]);
  };

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할일</Title>
          <TodoInput setTodoList={setTodoLists}></TodoInput>
          <TodoList>
            {todoList.map(todo => (
              <TodoItem todo={todo} />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
