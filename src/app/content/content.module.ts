import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { SkillService } from '../service/skill.service';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillComponent
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
