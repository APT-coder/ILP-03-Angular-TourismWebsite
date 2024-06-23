import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {

  constructor() { }

  async fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error('Error fetching images:', error);
    }
  }
}
