import { Component, signal, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
@Component({
  imports: [HeaderComponent, UserComponent, Tasks],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-angular-app');

  users =DUMMY_USERS;

  selectedUserName = '';

  onSelectUser(id: string) {
    const user = this.users.find(user => user.id === id);
    if (user) {
      this.selectedUserName = user.name;
    }
  }
}
