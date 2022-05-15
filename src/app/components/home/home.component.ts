import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teams: any; 
  constructor(
    private homeService: HomeService
  ) { }
  

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.homeService.getTeams().subscribe((teams: any) => {
      this.teams = teams;
      console.log(teams);
    });
    
  }
}
