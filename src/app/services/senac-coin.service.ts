import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenacCoinService {
  private readonly URL = environment.BASE_URL;
  constructor(private _http: HttpClient) {}
  getAllSenacCoin = () => {
    return this._http.get<any[]>(`${this.URL}/SenacCoinMovimentacao`);
  };
}
