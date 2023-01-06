import { Component } from '@angular/core';
import { ToDo } from './to-do.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  toDo: ToDo[] = JSON.parse(localStorage.getItem('@tasks') || '[]');

  onKeyDown(event: KeyboardEvent) {
    if (
      event.key.toLowerCase() != 'enter' ||
      !(event.target as HTMLInputElement).value
    )
      return;

    const newTodo = new ToDo();

    newTodo.index = this.toDo.length;
    newTodo.payload = (event.target as HTMLInputElement).value;
    newTodo.checked = false;

    this.toDo.push(newTodo);

    (event.target as HTMLInputElement).value = '';

    localStorage.setItem('@tasks', JSON.stringify(this.toDo));
  }

  handleStatus(_index: number) {
    this.toDo[_index].checked = !this.toDo[_index].checked;
    localStorage.setItem('@tasks', JSON.stringify(this.toDo));
  }

  handleDelete(_index: number) {
    this.toDo.splice(_index, 1);
    localStorage.setItem('@tasks', JSON.stringify(this.toDo));
  }
}
