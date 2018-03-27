import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class Service {
    constructor(private http: Http) {

    }
    getTableData() {
        const headersObj: Headers = new Headers();
        // const options = new RequestOptions({headers: headers});
        // headersObj.append('key' , 'Access-Control-Allow-Origin');
        // headersObj.append('value' , '*');
        // return this.http.get('https://angularapp-7099c.firebaseio.com/angularapp-7099c.json', { headers: headersObj }).subscribe(
        //     (res: Response) => { console.log(res); }
        // );
        return this.http.get('https://api.github.com/users').map(
            (res: Response) => { console.log(res); return res.json();  }
        );
    }
}
