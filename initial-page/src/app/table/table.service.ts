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

 

  getPartners(): Observable<any> {
    return this._httpClient.get(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners`).pipe(
      tap((res) => {
        return res;
      })
    );
  }
  
  deletePartner(id:string): Observable<any> {
    return this._httpClient.delete(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`).pipe(
      tap((res) => {

        console.log("deletado com sucesso", res)
        return res;
      })
    );
  }

}
