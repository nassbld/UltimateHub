import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../../models/player";
import {DataService} from "../../services/data.service";
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  player?: Player;
  playerImageUrl?: SafeUrl | undefined;
  playerNationalityImageUrl?: SafeUrl | undefined;
  playerClubImageUrl?: SafeUrl | undefined;

  constructor(
    private route: ActivatedRoute, private router: Router, private service: DataService) {  }

  ngOnInit(): void {
    const playerId : number | null = Number(this.route.snapshot.paramMap.get('id'));
    if(playerId) {
      this.service.getPlayerWithAdvancedStatsById(playerId).subscribe((data) =>{
        this.player = data;
        if(this.player?.idNationality && this.player?.idClub) {
          this.getImageNationality(this.player.idNationality);
          this.getImageClub(this.player.idClub);
        }
      });
      this.getImagePlayer(playerId);
    }

  }

  get imagesLoaded(): boolean {
    return this.playerImageUrl && this.playerNationalityImageUrl && this.playerClubImageUrl ? true : false;
  }

  private getImagePlayer(id: number): void {
    this.service.getImagePlayerById(id).subscribe(
      (imageUrl: SafeUrl) => {
        this.playerImageUrl = imageUrl;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'image :', error);
      }
    );
  }

  private getImageNationality(id: number): void {
    this.service.getImageNationalityById(id).subscribe(
      (imageUrl: SafeUrl) => {
        this.playerNationalityImageUrl = imageUrl;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'image :', error);
      }
    );
  }

  private getImageClub(id: number): void {
    this.service.getImageClubById(id).subscribe(
      (imageUrl: SafeUrl) => {
        this.playerClubImageUrl = imageUrl;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'image :', error);
      }
    );
  }

}
