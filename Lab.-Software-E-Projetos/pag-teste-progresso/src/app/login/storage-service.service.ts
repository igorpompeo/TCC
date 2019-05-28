import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }


  addItem(item: string, valor: string) {
    
    localStorage.setItem(item, valor);

  }
  removeItem(item: string) {
        
    localStorage.removeItem(item);

  }

  getItem(item: string) {
    return localStorage.getItem(item);
  }
}