import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const player = navigation?.extras.state?.['player'];
    console.log(player);
  }

  ngOnInit(): void {
  }

}
