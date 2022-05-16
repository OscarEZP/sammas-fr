import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HomeService } from '../../../app/services/home.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  team: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private homeService: HomeService,
    ) { }

  ngOnInit(): void {
    this.homeService.getTeamById(this.data.id).subscribe((team) => {
      this.team = team;
    });
  }

}
