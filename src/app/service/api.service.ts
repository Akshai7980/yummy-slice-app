import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://yummy-slice.herokuapp.com/';
const userType = 'user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  postMethod(path: string, param: any) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + ''
        // this.token.getToken(),
      };
      this.http.post(BASE_URL + path, param, { headers } ).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  postRequestWithoutParam(path: string) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      const options = { headers: headers };

      this.http.post(BASE_URL + path, options).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getMethod(path: string) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      const options = { headers: headers };

      this.http.get(BASE_URL + path, options).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
