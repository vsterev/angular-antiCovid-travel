// import { IVilla } from 'src/app/shared/interfaces/villa';
import { Observable } from 'rxjs';
import { IVilla } from './../shared/interfaces/villa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class VillaService {

  constructor(private http: HttpClient, private userService: UserService) { }

  villaAdd(villaInfo: IVilla): Observable<IVilla> {
    return this.http.post<IVilla>('offer/create', villaInfo);
  }
  villaEdit(villaInfo: IVilla, id: string): Observable<IVilla> {
    return this.http.post<IVilla>(`offer/edit/${id}`, villaInfo);
  }
  villaDetail(id: string): Observable<IVilla> {
    return this.http.get<IVilla>(`offer/details/${id}`);
  }
  villaDelete(id: string): Observable<any> {
    return this.http.get<any>(`offer/delete/${id}`);
  }
  villaLike(id: string): Observable<any> {
    return this.http.get<any>(`offer/like/${id}`);
  }
  villaDislike(id: string): Observable<any> {
    return this.http.get<any>(`offer/dislike/${id}`);
  }
  villaListLimited(limit: number): Observable<IVilla[]> {
    return this.http.get<IVilla[]>(`offer/all-offers/${limit}`);
  }
  villaListExtended(params?: object): Observable<IVilla[]> {
    return this.http.post<IVilla[]>('offer/all-offers/extended', params);
  }
  userVillas(): Observable<IVilla[]> {
    return this.http.get<IVilla[]>(`offer/all-offers/user`);
  }
}
