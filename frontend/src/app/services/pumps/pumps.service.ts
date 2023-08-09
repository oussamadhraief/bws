import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPump } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PumpsService {

  constructor(private http: HttpClient) {}

  findAll(): Observable<IPump[]> {
    return this.http.get<IPump[]>('/api/pumps');
  }
}
