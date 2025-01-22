import { Component, HostListener} from '@angular/core';
import {RouterLink, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-side-bar',
  imports: [
    RouterModule,
    RouterLink,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  
})
export class SideBarComponent {
  isScreenSmall = false;

  @HostListener('window:resize', [])
  onResize() {
    this.isScreenSmall = window.innerWidth < 768; 
  }

  ngOnInit() {
    this.isScreenSmall = window.innerWidth < 768;
  }
}



