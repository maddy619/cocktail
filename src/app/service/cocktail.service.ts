import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<object> {
    return this.http.get(this.baseURL);    
  }
}
