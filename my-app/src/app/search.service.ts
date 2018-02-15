import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  constructor(private http: Http) {
    this.http = http;
  }
 fetchData(searchedWords: string) {
   const headersObj: Headers  = new Headers();
   headersObj.append('X-Mashape-Key', '3Rs7W7Odwdmsh3oBCMFobwqFFB4dp1utjfGjsnYJL3b5pK9Lz0');
   headersObj.append('X-Mashape-Host', 'wordsapiv1.p.mashape.com');
   return this.http.get('https://wordsapiv1.p.mashape.com/words/' + searchedWords + '/synonyms',  { headers: headersObj }).map(
     (res: Response) => {
        console.log('res---->', res);
     }
   );
 }
}
