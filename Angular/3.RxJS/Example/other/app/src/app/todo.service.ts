import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TodoService {

  constructor(private injector: Injector) {
    this.injector.get(TodoService)
   }

   getTodos() {
     return Promise.resolve([
      {
        title: 'asdf',
        isCompleted: false
      },
      {
        title: 'fdsa fas gdasd s fas3',
        isCompleted: false
      }
    ])
   }
}
