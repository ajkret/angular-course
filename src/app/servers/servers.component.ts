import { Component } from '@angular/core';

@Component({
  //selector: 'app-servers', // use like <app-servers></app-servers>
  //selector: '[app-servers]', // It is now an attribute to be used with <div app-servers> for instance
  selector: '.app-servers', // It is now to be used with 'class' attribute <div class='app-servers'>
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
