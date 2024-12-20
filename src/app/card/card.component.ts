import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cards = [ 
    {
      id: '1', 
      img: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Pyramid_Game_%28TV_series%29_poster.jpg', 
      title: 'Pyramid Game', 
      info: 'This is some information about card 1.' 
    },
    {
      id: '2',
      img: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Night_Has_Come_poster.png',
      title: 'Night Has Come',
      info: 'This is some information about card 2.'
    }
  ]
}
