import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp5';
  users: string[] = ['John', 'Jane', 'Jim', 'Jill'];
  newUserName: string = '';

  removeUser() {
    this.users.pop();
  }
  clearUser() {
    this.users = [];
  }

  addUser(name: string) {
    this.users.push(name);
  }

}
