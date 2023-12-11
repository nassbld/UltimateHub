import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from "../../app-routing.module";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { Player } from "../../models/player";
import { Observable } from "rxjs";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  playerList: Player[] | undefined;

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPlayers().subscribe((data) => {
      this.playerList = data;
    });
  }

}
