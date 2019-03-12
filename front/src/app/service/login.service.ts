import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {

    public constructor(private readonly _http: HttpClient) {}

    public login($datas: any): Observable<Object> {
        const params: { password: string; login: string } = { password: $datas.password, login: $datas.login };
        return this._http.get('http://localhost:/', { params });
    }
}

