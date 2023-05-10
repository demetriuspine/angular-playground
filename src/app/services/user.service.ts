import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    const users = this.http.get<IUser[]>(`${this.BASE_URL}/users`);
    return users;
  }

  postUser(user: IUser): Observable<IUser>{
    const newUser = this.http.post<IUser>(`${this.BASE_URL}/users`, user, httpOptions);
    return newUser;
  }
}
