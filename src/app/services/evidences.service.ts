import {Injectable} from '@angular/core';
import {ServiceBaseService} from "../core/service-base.service";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EvidencesService extends ServiceBaseService {

  listAll(id: any): Observable<any> {
    return this.getAll(`/evidences/list/${id}`)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        }));
  }

}
