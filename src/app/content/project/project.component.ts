import { Component, OnInit } from '@angular/core';
import { Member, Project } from 'src/app/interface/project';
import { Response } from 'src/app/interface/response';
import { ProjectService } from 'src/app/service/project.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TechnologyDialogComponent } from 'src/app/component/dialog/technology/technology-dialog/technology-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public dataProject: Project[] = [];
  public dataMember!: Member[];

  public coverImage!: string;

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(){
    this.projectService.getProject().subscribe((res) => {
      let response: Response = res;
      let responseContent = response.content;
      this.dataProject = responseContent!;
    })
  }

  detailTech(dataTech: Project){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = dataTech;
      dialogConfig.minWidth = "50vw";

      const dialogOpen = this.dialog.open(
        TechnologyDialogComponent,
        dialogConfig
      )
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}

