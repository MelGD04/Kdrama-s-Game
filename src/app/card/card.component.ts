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
      info: "It’s a game involving 2 different teams (the mafia and the townspeople) with 4 different characters (Mafia, Citizens, Doctor and Police) plus a Moderator/Mayor. The Citizens, Doctor and Police all belong to the team of townspeople while the Mafia forms their own team by themselves. In the beginning of the game, each player is given one of the characters without knowing any of the other players characters."
    }
  ]
}
