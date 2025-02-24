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
  
  users = [
    { name: '1' }, { name: '2' }, {name: '3'}, {name: '4'}, {name: '5'},
    { name: '6' }, { name: '7' }, {name: '8'}, {name: '9'}, {name: '10'},
    { name: '11' }, { name: '12' }, {name: '13'}, {name: '14'}, {name: '15'},
    { name: '16' }, { name: '17' }, { name: '18' }, { name: '19' }, { name: '20' },
    { name: '21' }, { name: '22' }, { name: '23' }, { name: '24' }, { name: '25' },
    { name: '26' }, { name: '27' }, { name: '28' }, { name: '29' }, { name: '30' }
  ]
}
