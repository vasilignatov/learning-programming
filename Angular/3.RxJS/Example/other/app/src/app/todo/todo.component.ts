import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})

export class TodoComponent implements OnInit {


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}

const obs = new Observable((subscriber) => {
  subscriber.next('asdfasdf');
  // subscriber.error('Error');
});


obs.subscribe({
  next: (result) => {
    console.log(result);
  },
  error: (err) => {
    console.error(err);
  }
});

