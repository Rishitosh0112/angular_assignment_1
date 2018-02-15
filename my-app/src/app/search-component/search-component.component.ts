import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../search.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit, OnDestroy {
  searchEmitter;
  allWords;
  searchService: SearchService;

  private searchUpdated: Subject<any> = new Subject<any>();
  constructor(searchService: SearchService) {
    this.searchService = searchService;
  }
  private onSearchTyped(event: Event) {
    this.searchUpdated.next((<HTMLInputElement>event.target).value);
  }

  getData(word: string) {
    this.searchService.fetchData(word).subscribe(
     res => {
       this.allWords = res;
     },
     err => { console.log('err', err); }

    );
  }
  ngOnInit() {
  this.searchEmitter = this.searchUpdated.debounceTime(300).subscribe(
       (data) => {
        console.log('data-->', data);
        this.getData(data);
      },
    );
  }
  ngOnDestroy() {
    this.searchEmitter.unsubscribe();
  }
}
