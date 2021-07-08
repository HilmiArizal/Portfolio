import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member, Project, Technology } from 'src/app/interface/project';

@Component({
  selector: 'app-technology-dialog',
  templateUrl: './technology-dialog.component.html',
  styleUrls: ['./technology-dialog.component.css']
})
export class TechnologyDialogComponent implements OnInit {
  
  public dataListTech!: Technology;
  public dataListMember!: Member[];

  constructor(
    private dialogRef: MatDialogRef<TechnologyDialogComponent>, @Inject(MAT_DIALOG_DATA) public dataTech: Project
  ) { 
    this.dataListTech = dataTech.technology!;
    this.dataListMember = dataTech.member!;
  }

  ngOnInit(): void {
  }

}
