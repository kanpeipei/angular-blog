import { Blog } from './../interfaces/blog';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class BlogService {
  blog: Blog[] = [];
  private Url = 'http://localhost:8000/api/blog/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  getAllBlog(): Observable<any>{
    return this.http.get(this.Url, {headers: this.headers});
  }
  getBlog(id: number): Observable<Blog>{
    const url = `${this.Url}${id}`;
    return this.http.get<Blog>(url);
  }
}
