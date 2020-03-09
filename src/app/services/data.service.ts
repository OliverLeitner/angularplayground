import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../interfaces/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getDataSmall() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .toPromise()
      .then((res) => res as Data[])
      .then(data => {
        console.log(data);
        return data;
      });
  }
}
