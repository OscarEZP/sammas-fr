import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeModule } from '../components/home/home.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    HomeModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
