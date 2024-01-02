import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  TableDataGenericType,
  TableDatasourceModel,
} from '../models/table-datasource.model';
import { TableModules } from './table.modules';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [TableModules],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterContentInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ContentChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable, { static: true }) table!: MatTable<TableDataGenericType>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  dataSource = new TableDatasourceModel([]);

  @Input() set tableData(data: TableDataGenericType[]) {
    if (!data) {
      return;
    }

    this._initTable(data);
  }
  @Input() displayedColumns: string[] = [];
  @Input() isLoading: boolean;

  ngAfterContentInit(): void {
    this._setColumnDef();
  }

  private _setColumnDef(): void {
    for (const column of this.columnDefs) {
      this.table.addColumnDef(column);
    }
  }

  private _initTable(data: TableDataGenericType[]): void {
    this.dataSource = new TableDatasourceModel(data);
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
