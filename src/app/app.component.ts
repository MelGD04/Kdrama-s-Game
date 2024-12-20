import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    SideBarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kdrama-game';

  
}
