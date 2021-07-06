import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private dataUrl: string;

  constructor(private http: HttpClient) {
    this.dataUrl = environment.url.dataSkill;
    this.getSkill();
  }

  getSkill() {
    return this.http.get(this.dataUrl)
  }
}
