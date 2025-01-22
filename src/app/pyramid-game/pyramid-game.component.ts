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
      const boton = document.querySelector(".botton") as HTMLElement | null;
      if (boton) {
        if (window.scrollY > 0) {
          boton.classList.add("scrolled");
        } else {
          boton.classList.remove("scrolled");
        }
      }
    }

    currentContent: string = 'content1'; // Inicialmente muestra el primer encabezado (índice 0)

    contentTags: string[] = ['content1', 'content2', 'content3', 'content4'];
  
    nextContent(): void {
      const currentIndex = this.contentTags.indexOf(this.currentContent);
      const nextIndex = (currentIndex + 1) % this.contentTags.length; // Cicla hacia adelante
      this.showContent(this.contentTags[nextIndex]);
    }

    previousContent(): void {
      const currentIndex = this.contentTags.indexOf(this.currentContent);
      const previousIndex = (currentIndex - 1 + this.contentTags.length) % this.contentTags.length; // Cicla hacia atrás
      this.showContent(this.contentTags[previousIndex]);
    }

    showContent(title: string): void { 
      console.log('Cambiando a:', title);
      this.currentContent = title; 
    }

    voteNumbers = [
      { id:'1' },
      { id:'2' }, 
      { id:'3' },
      { id:'4' },
      { id:'5' }
    ]
}
