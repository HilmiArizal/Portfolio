import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { SkillService } from '../service/skill.service';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectService } from '../service/project.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    CarouselModule,
    IvyCarouselModule
  ],
  providers: [
    SkillService,
    ProjectService
  ]
})
export class ContentModule { }
