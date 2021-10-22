import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { DataRow } from '../interfaces/data-row';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http: HttpClient) { }
  private dataCashed: any;

  recordDataCashed(newDataCashed: any) {
    this.dataCashed = newDataCashed;
  }

  getDataCached() {
    return this.dataCashed;

  }

  getData() {
    return this.http.get('assets/tableData.json').pipe(map((value: any) => {
      value.result.forEach((element: DataRow, index: number) => { value.result[index] = new DataRow(element) });
      return value;
    }))
  }

  putData(data: any) {
    return this.http.post('assets/tableData.json', data);
  }

}
