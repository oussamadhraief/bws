import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITank } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TanksService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<ITank[]> {
    return this.http.get<ITank[]>('/api/tanks');
  }
}
