import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-night-as-come',
  imports: [],
  templateUrl: './night-as-come.component.html',
  styleUrl: './night-as-come.component.css'
})
export class NightAsComeComponent{

    @HostListener ('windowScroll', [])
    onWindowScroll(): void{
      const boton = document.querySelector(".button") as HTMLElement | null;
      if (boton) {
        if (window.scrollY > 0) {
          boton.classList.add("scrolled");
        } else {
          boton.classList.remove("scrolled");
        }
      }
    }
    

  
}
