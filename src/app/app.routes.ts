import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PyramidGameComponent } from './pyramid-game/pyramid-game.component';
import { NightAsComeComponent } from './night-as-come/night-as-come.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'pyramid-game', component:PyramidGameComponent},
    {path:'night-as-come', component:NightAsComeComponent}
];
