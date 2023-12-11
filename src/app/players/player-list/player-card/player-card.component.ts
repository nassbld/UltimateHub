import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../../models/player';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player!: Player;
  public playerImageUrl: SafeUrl | undefined;

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getImageUrl();
  }

  private getImageUrl(): void {
    this.dataService.getImagePlayerById(this.player.id).subscribe(
      (imageUrl: SafeUrl) => {
        this.playerImageUrl = imageUrl;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'image :', error);
      }
    );
  }
}
