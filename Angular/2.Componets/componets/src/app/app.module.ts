import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NewAppComponent } from './new-app/new-app.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    NewAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
