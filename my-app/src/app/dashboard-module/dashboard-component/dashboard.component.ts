import { Component, OnInit } from '@angular/core';
import { Service } from '../../service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.less', '../../app.component.less']
})

export class DashboardComponent implements OnInit {
    allMembers: {}[];
    addMember = {
        id: '',
        login: '',
        url: ''
    };
    constructor(private service: Service) {

    }
  ngOnInit() {
      this.service.getTableData().subscribe(
          (res) => { this.allMembers = res; }
      );
  }
  AddMemberFunc() {
    this.allMembers.unshift(this.addMember);
  }
  delete(i) {
    this.allMembers.splice(i, 1);
  }
}
