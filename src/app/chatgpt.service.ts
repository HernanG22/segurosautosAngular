import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';  // Actualiza el endpoint si es necesario
  private apiSpring = 'http://localhost:8080/api/hello';
  private apiKey = 'aIK57FNU1PoT9qmPpemsvFF9LB8if3BudUT9YVqy';  // TU_API_KEY 

  constructor(private http: HttpClient) { }
 
  getCompletion (): Observable<any> {
    
   const urlWithParams = `${this.apiUrl}?api_key=${this.apiKey}`;

        return this.http.get<any>(urlWithParams);
  }

  helloSpring (): Observable<string> {
    
        return this.http.get(this.apiSpring,{responseType:'text'});
  }
}
