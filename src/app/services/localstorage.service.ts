import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  get = (key: string) => {
    let response = JSON.parse(localStorage.getItem(key) as string)
    if (response) {
      return response;
    }
  }

  set = (body: any, key: any) => {
    localStorage.setItem(key,JSON.stringify(body));
  }
}
