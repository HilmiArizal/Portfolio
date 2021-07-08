import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private dataUrl: string;

  constructor(private http: HttpClient) { 
    this.dataUrl = environment.url.dataProject;
  }

  getProject(){
    return this.http.get(this.dataUrl);
  }
}
