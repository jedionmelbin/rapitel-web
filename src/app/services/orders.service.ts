import {Injectable} from '@angular/core';
import {ServiceBaseService} from "../core/service-base.service";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends ServiceBaseService {

  listAll(): Observable<any> {
    return this.getAll(`/orders/list`)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        }));
  }

  create(form: any): Observable<any> {
    return this.post(`/orders/create`, form)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        }));
  }
}
