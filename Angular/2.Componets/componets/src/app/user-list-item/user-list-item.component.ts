import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user!: IUser; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
