import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

// 기본 선택자
// 기본 선택자는 모든 상태를 반환하는 선택자, 그 중 todo 상태를 반환
export const baseSelector = (state: RootState) => state.todo;

// todoList 선택자
// todoList 상태를 반환하는 선택자
export const TodoListSelector = createSelector(
  baseSelector,
  state => state.todoList,
);
