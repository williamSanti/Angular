import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles : [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class SidebarComponent {

  constructor() { }


}
