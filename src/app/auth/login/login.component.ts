import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.getPlayers(1).subscribe(players => {
      console.log(players);
    });
  }

}
