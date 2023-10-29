import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // use like <app-servers></app-servers>
  //selector: '[app-servers]', // It is now an attribute to be used with <div app-servers> for instance
  //selector: '.app-servers', // It is now to be used with 'class' attribute <div class='app-servers'>
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'offline'
  serverName = 'TestServer';
  serverCreated = false;
  servers = [ 'Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  onCreateServer() {
    this.serverCreationStatus = `online`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
