import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService<T> {

  constructor(private http: HttpClient) {
  }

  getAll(url: string): Observable<T[]> {
    return this.http.get<T[]>(url+"/mostrar");
  }

  getById(url: string, id: number): Observable<T> {
    return this.http.get<T>(`${url}?id=${id}`);
  }

  create(url: string, item: T): Observable<T> {
    return this.http.post<T>(url, item);
  }

  update(url: string, id: number, item: T): Observable<T> {
    return this.http.put<T>(`${url}/${id}`, item);
  }

  delete(url: string, id: number): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
