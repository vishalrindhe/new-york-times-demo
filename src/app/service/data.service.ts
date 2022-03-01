import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:String = 'https://api.nytimes.com/svc'
  key:String = '3zBDwMAdzACydjjxz4typg1ZRSJLZGqN'
  date:any
  year:any
  todaysDate:any
  httpOptionsNoAuth : any;

  constructor(private http: HttpClient, private router: Router) {
    this.date = new Date();
    this.year = this.date.getFullYear()
    this.todaysDate = this.date.getMonth() + 1
   }


  topStoriesArts(): Observable<any>{
    return this.http.get(this.url + '/topstories/v2/home.json?api-key=' + this.key)
  }
  
  archive(): Observable<any>{
    return this.http.get(this.url + '/archive/v1/'+this.year+'/'+this.todaysDate+'.json?api-key=' + this.key)
  }

  topStories(value:string): Observable<any>{
    return this.http.get(this.url + '/topstories/v2/'+ value+'.json?api-key=' + this.key)
  }

  mostPopularViewed(): Observable<any>{
    return this.http.get(this.url + '/mostpopular/v2/viewed/1.json?api-key=' + this.key)
  }
}
