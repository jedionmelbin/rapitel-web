import {Injectable} from '@angular/core';
import {ServiceBaseService} from "../core/service-base.service";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ServiceBaseService {


  listAll(): Observable<any> {
    return this.getAll(`/products/list`)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        }));
  }

  getById(id: any): Observable<any> {
    return this.getAll(`/products/${id}`)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        }));
  }

  create(form: any): Observable<any> {
    return this.post(`/products/create`, form)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        }));
  }
}
