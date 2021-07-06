import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { SkillService } from '../service/skill.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  providers: [
    SkillService
  ]
})
export class ContentModule { }
