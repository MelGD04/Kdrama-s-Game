import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 

@Component({
  selector: 'app-home',
  imports:[
    CardComponent,
    MatSidenavModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
