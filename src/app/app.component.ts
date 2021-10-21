import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataRow } from './interfaces/data-row';
import { TableDataService } from './services/table-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  constructor(public tableDataService: TableDataService) { }

  title = 'project';
  public jsonDataArray: Array<DataRow> = [];
  public subscribersArray: Array<Subscription> = [];

  ngOnInit() {
    const tableDataServiceSubscriber = this.tableDataService.getData().subscribe((res: any) => { this.jsonDataArray = res.result; });
    this.subscribersArray.push(tableDataServiceSubscriber);
  }
  updateData(event: any) {
    const tableDataServiceSubscriber = this.tableDataService.putData(event).subscribe((res: any) => { });
    this.subscribersArray.push(tableDataServiceSubscriber);
  }
  ngOnDestroy(): void {
    this.subscribersArray.forEach((subscription)=>{subscription.unsubscribe()});
  }
}
