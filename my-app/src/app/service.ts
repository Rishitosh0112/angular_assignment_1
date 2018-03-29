import { Injectable } from '@angular/core';
import { Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class Service {
    constructor(private http: HttpClient) {

    }
    getTableData() {
        const headersObj: Headers = new Headers();
        return this.http.get('https://api.github.com/users').map(
            (res: Response) => { console.log(res); return res; }
        );
    }
}
