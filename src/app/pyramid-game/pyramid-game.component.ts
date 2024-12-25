import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-pyramid-game',
  imports: [],
  templateUrl: './pyramid-game.component.html',
  styleUrl: './pyramid-game.component.css'
})
export class PyramidGameComponent {

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

    currentContent: string = 'content1'; // Inicialmente muestra el primer encabezado (índice 0)
  
    showContent(title: string): void { 
      console.log('Cambiando a:', title);
      this.currentContent = title; 
    }
}
