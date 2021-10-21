import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataRow } from '../../interfaces/data-row';
import { TableDataService } from '../../services/table-data-service.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, public tableDataService: TableDataService) {
  }

  public _dataArray: Array<DataRow> = [];
  public tableFormgroupArray: Array<FormGroup> = [];
  private subscribersArray: Array<Subscription> = [];

  @Input() set dataArray(value: Array<DataRow>) {
    this._dataArray = value;
    this.createArrayFormGroup();
  };
  get dataArray() {
    return this._dataArray;
  }

  @Output() tableChangedEvent = new EventEmitter();
  createArrayFormGroup() {
    this.tableFormgroupArray = [];
    this._dataArray.forEach((el, index) => {
      this.addTableRow(el, index);
    });
  }
  addTableRow(element: DataRow = new DataRow(), index: number = this.tableFormgroupArray.length) {
    const formGroup = this.fb.group(element);
    this.tableFormgroupArray.push(formGroup);
    const formGroupSubscription = formGroup.valueChanges.subscribe((value) => { this.getOutPutData(value, index) });
    this.subscribersArray.push(formGroupSubscription);
  }

  getOutPutData(changedRow: any, index: number) {
    if (changedRow) {
      this._dataArray[index] = changedRow;
    } else {
      this._dataArray.splice(index, 1);
      this.tableFormgroupArray.splice(index, 1);
    }
    this.tableChangedEvent.emit(this._dataArray);
  }
  deleteRow(event: any, index: number) {
    if (event.inputType === 'deleteContentBackward') {
      this.getOutPutData(null, index)
    } else {
      event.target.value = index + 1;
    }

  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscribersArray.forEach((subscriber) => { subscriber.unsubscribe(); })
  }


}
