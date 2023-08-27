import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PartnerService {

  /**
   * Construtor
   *
   * @param {HttpClient} _httpClient - Client HTTP para fazer requisições
   */
  constructor(
    private _httpClient: HttpClient
  ) {}

  getPartnerById(id:string): Observable<any> {
    return this._httpClient.get(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`).pipe(
      tap((res) => {
        return res;
      })
    );
  }
  
  updatePartner(id:string, obj:any): Observable<any> {
    return this._httpClient.put(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`, obj).pipe(
      tap((res) => {

        
        return res;
      })
    );
  }

  createPartner(obj:any): Observable<any> {
    console.log("teste",obj)
    return this._httpClient.post(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners`, obj).pipe(
      tap((res) => {
        
        return res;
      })
    );
  }

}
