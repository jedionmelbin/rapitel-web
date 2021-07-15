import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseService {

  accessToken: any = '';
  authToken: any;
  storage: any;

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache');

  constructor(protected http: HttpClient,
              protected router: Router) {

  }

  getAll(api: string) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.get(urlApi, {headers: this.headers});
  }

  getAllTyped(api: string) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.get<any>(urlApi);
  }

  getById(api: string, id: number) {
    const urlApi = `${environment.api.baseUrl}${api}/${id}`;
    return this.http.get(urlApi, {headers: this.headers});
  }

  get(api: string) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.get(urlApi, {headers: this.headers});
  }

  getDownload(api: string, id: number, idTipo: string) {
    let parms = new HttpParams();
    parms = parms.append('idTipo', idTipo);

    const urlApi = `${environment.api.baseUrl}${api}/${id}`;
    return this.http.get(urlApi,
      { params: parms,
        responseType: 'blob'}
    );
  }

  getDownloadMedida(api: string, id: string) {
    const urlApi = `${environment.api.baseUrl}${api}/${id}`;
    return this.http.get(urlApi,
      { responseType: 'blob'}
    );
  }

  getDownloadPDFConsulta(api: string) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.get(urlApi,
      { responseType: 'blob'}
    );
  }

  getExcel(api: string,body:any) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.post(urlApi, body,
      { responseType: 'blob'}
    );
  }

  getByState(api: string, state: string) {
    const urlApi = `${environment.api.baseUrl}${api}/${state}`;
    return this.http.get(urlApi, {headers: this.headers});
  }

  postPDF(api: string, body: any) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.post(urlApi, body);
  }

  postSelectInsert(api: string, fechaBusqueda: string) {
    const urlApi = `${environment.api.baseUrl}${api}/${fechaBusqueda}`;
    return this.http.get(urlApi, {headers: this.headers});
  }

  post(api: string, body: any) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.post(urlApi, body, {headers: this.headers});
  }

  put(api: string, body: any) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.put(urlApi, body, {headers: this.headers});
  }

  update(api: string, body: any) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.put(urlApi, body, {headers: this.headers});
  }

  delete(api: string, id: string) {
    const urlApi = `${environment.api.baseUrl}${api}/${id}`;
    return this.http.delete(urlApi, {headers: this.headers});
  }

  deleteUrl(api: string) {
    const urlApi = `${environment.api.baseUrl}${api}`;
    return this.http.delete(urlApi, {headers: this.headers});
  }

  sendFile(api: string, body: any) {
    const urlApi = `${environment.api.baseUrl}${api}`;

    const htmlOptions = {
      headers: new HttpHeaders({
        'Accept': '/'
      })
    };
    return this.http.post(urlApi, body, htmlOptions);
  }
}
