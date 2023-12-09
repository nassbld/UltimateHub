import {Component, OnInit} from '@angular/core';
import {AppRoutingModule} from "../../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players = [
    { name: 'Alex Mercier', imageUrl: 'path/to/image1.jpg', statistic: 88 },
    { name: 'Luis Alvarez', imageUrl: 'path/to/image2.jpg', statistic: 92 },
    { name: 'Marco Reus', imageUrl: 'path/to/image3.jpg', statistic: 90 },
    { name: 'John Doe', imageUrl: 'path/to/image4.jpg', statistic: 85 },
    { name: 'Sergio Ramos', imageUrl: 'path/to/image5.jpg', statistic: 93 },
    { name: 'Eden Hazard', imageUrl: 'path/to/image6.jpg', statistic: 91 },
    { name: 'Kylian Mbappé', imageUrl: 'path/to/image7.jpg', statistic: 94 },
    { name: 'Lionel Messi', imageUrl: 'path/to/image8.jpg', statistic: 95 },
    { name: 'Cristiano Ronaldo', imageUrl: 'path/to/image9.jpg', statistic: 97 },
    { name: 'Neymar Jr', imageUrl: 'path/to/image10.jpg', statistic: 92 }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onCardClick(player: any) {
    console.log('Clicked on player:', player.name);
    this.router.navigate(['/player-details'], { state: { player } });
  }

}
