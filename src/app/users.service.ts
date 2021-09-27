import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getData(start: number): Observable<User[]> {
    const url =
      'https://jsonplaceholder.typicode.com/users/?_start=' +
      start +
      '&_limit=5';
    return this.http.get(url).pipe(
      map((data: any) => {
        let userList = data;

        return userList.map(function (user: any): User {
          return new User(
            user.id,
            user.name,
            user.username,
            user.address.city,
            user.email
          );
        });
      })
    );
  }

  getAllData(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url).pipe(
      map((data: any) => {
        let userList = data;

        return userList.map(function (user: any): User {
          return new User(
            user.id,
            user.name,
            user.username,
            user.address.city,
            user.email
          );
        });
      })
    );
  }

  getUser(id: number): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
