import { Injectable } from '@nestjs/common';

import { Todo } from '@smartlists/shared-types';

@Injectable()
export class AppService {
  private todos: Todo[] = [];

  getData(): Todo[] {
    return this.todos;
  }

  add(text: string): void {
    this.todos.push({
      id: this.todos.length.toString(),
      text,
      done: false,
    });
  }

  setDone(id: string, done: boolean): void {
    this.todos = this.todos.map((todo) => ({
      ...todo,
      done: todo.id === id ? done : todo.done,
    }));
  }

  clearTodos(): void {
    this.todos = [];
  }
}
