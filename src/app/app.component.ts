import { Component } from '@angular/core';
import { ToDo } from './to-do.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  toDo: ToDo[] = [];

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
  }

  handleStatus(_index: number) {
    this.toDo[_index].checked = !this.toDo[_index].checked;
  }

  handleDelete(_index: number) {
    this.toDo.splice(_index, 1);
  }
}
