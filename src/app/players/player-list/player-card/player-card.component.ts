import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input()
  player?: Player;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.player)
    console.log("hello")
  }

  onCardClick(player: any) {
    console.log('Clicked on player:', player.name);
    this.router.navigate(['/player-details'], { state: { player } });
  }

}
