import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { TodoState } from './types';
import { loadTodoData, saveTodoData } from 'store/localStorage';

export const initialState: TodoState = {
  todoList: loadTodoData(),
};

const slice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodoItem>) => {
        state.todoList.push(action.payload);
        saveTodoData(state.todoList);
      },
      prepare: (content: string) => {
        const id = nanoid();
        return {
          payload: {
            id: id,
            completed: false,
            content: content,
            editing: false,
          },
        };
      },
    },
    checkTodo: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      saveTodoData(state.todoList);
    },
    editModeTodo: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      for (const todo of state.todoList) {
        if (todo.id === id) continue;
        if (todo.editing === true) todo.editing = false;
      }
      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.editing = !todo.editing;
      }
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const id = action.payload.id;
      const content = action.payload.content;

      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.content = content;
      }
      saveTodoData(state.todoList);
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const filteredTodos = state.todoList.filter(todo => todo.id !== id);
      state.todoList = filteredTodos;
      saveTodoData(state.todoList);
    },
  },
});

export const { actions: TodoActions } = slice;
export const useTodoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  //return slice.reducer;
  return { reducer: slice.reducer, TodoActions };
};
