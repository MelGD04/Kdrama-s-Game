import { Component} from '@angular/core';
import {RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [
    RouterModule,
    RouterLink,
],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  
})
export class SideBarComponent {
  
}



