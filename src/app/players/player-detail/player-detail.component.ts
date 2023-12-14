import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../../models/player";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  playerId!: string;
  player!: Player;

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerId = params['playerId'];
      console.log(this.playerId)
      this.service.getPlayerWithAdvancedStatsById('1').subscribe( data => {
        this.player = data;
        console.log(this.player.name)
      })
    })
  }

}
