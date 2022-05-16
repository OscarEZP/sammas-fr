import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HomeService } from 'src/app/services/home.service';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    MatDialogModule
  ],
  providers: [HomeService],
  exports:[HomeComponent]
})
export class HomeModule { }
