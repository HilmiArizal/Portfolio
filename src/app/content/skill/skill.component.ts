import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interface/response';
import { Skill } from 'src/app/interface/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  public dataSkill!: Skill[];

  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill(){
    this.skillService.getSkill().subscribe((res) => {
      let response: Response = res;
      console.log(res);
      let responseContent = response.content;
      this.dataSkill = responseContent!;
    });
  }

}
