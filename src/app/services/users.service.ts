import {Injectable} from '@angular/core';
import {ServiceBaseService} from "../core/service-base.service";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ServiceBaseService {

  listAll(): Observable<any> {
    return this.getAll(`/users/list`)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        }));
  }
}
