import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:String = 'https://api.nytimes.com/svc'
  key:String = '3zBDwMAdzACydjjxz4typg1ZRSJLZGqN'

  constructor(private http: HttpClient, private router: Router) { }

  topStoriesArts(): Observable<any>{
    return this.http.get(this.url + '/topstories/v2/arts.json?api-key=' + this.key)
  }
}
