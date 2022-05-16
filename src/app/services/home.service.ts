import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(`${environment.SAMMAS_URL_BACKEND}/teams`);
  }

  getTeamById(id: string) {
    return this.http.get(`${environment.SAMMAS_URL_BACKEND}/teams/${id}`);
  }
}