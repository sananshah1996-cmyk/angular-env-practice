import { Component, Input, Output, EventEmitter, output} from '@angular/core';
import { DUMMY_USERS} from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class UserComponent{
  @Input({ required: true }) id!:  string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  //@Output() selectedUser = new EventEmitter<string>();
  selectedUser = output<string>();

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }


  onSelectUser(){
    this.selectedUser.emit(this.id);
  }

}
 