import { Component, OnInit } from '@angular/core';
// import Typewriter from 't-writer.js'
// import Typewriter from 'typewriter-effect/dist/core';

import { MatTableDataSource } from '@angular/material/table';
import { Response } from 'src/app/interface/response';
import { Skill } from 'src/app/interface/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public index: any = 0;
  public text: string = "";

  constructor() { }

  ngOnInit(): void {

  }


}
