import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from "../../app-routing.module";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { Player } from "../../models/player";
import { Observable } from "rxjs";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  playerList: Player[] | undefined;
  pageSizeOptions: number[] = [20, 50, 100];
  totalPlayers = 0;
  currentPage = 1;
  pageSize = 20;
  
  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.dataService.getPlayers(this.currentPage).subscribe((data) => {
      this.playerList = data.players;
      this.totalPlayers = data.pagination.countTotal;
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.loadPlayers();
  }

}
