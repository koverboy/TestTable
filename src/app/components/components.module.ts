import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [ TableComponent],
    exports: [ TableComponent]
})
export class ComponentsModule { }