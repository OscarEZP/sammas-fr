import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teams: any; 
  constructor(
    private homeService: HomeService,
    public dialog: MatDialog
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

  openDialog(item: any) {
    this.dialog.open(ModalComponent, {
      data: {
        id: item.id
      }
    });
  }
}
