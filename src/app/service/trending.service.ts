import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private httpClient:HttpClient) {
    
   }
   GetTrending():Observable<any>{
     return this.httpClient.get<any>('https://api.themoviedb.org/3/trending/person/day?api_key=866cd3a065ef9304a549f1d65e494940')
   }
}
