import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }

  // users = [
  //   {
  //     name: 'Ivan 1',
  //     age: 20
  //   },
  //   {
  //     name: 'Ivan 2',
  //     age: 21
  //   },
  //   {
  //     name: 'Ivan 3',
  //     age: 22
  //   }
  // ];

}
