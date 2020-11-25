import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservation } from '../shared/interfaces/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  userReservation(): Observable<IReservation[]> {
    return this.http.get<IReservation[]>('reservation/all');
  }
  reservationDetail(id: string): Observable<IReservation> {
    return this.http.get<IReservation>(`reservation/details/${id}`);
  }
}
