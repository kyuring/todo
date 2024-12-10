// .d.ts : import를 하지않아도 전역에서 사용가능함
interface ItodoItemContent {
  content: string;
}

interface ITodoItem extends ItodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
