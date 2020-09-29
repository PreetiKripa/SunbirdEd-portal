import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SbDatatableComponent} from './sb-datatable.component';
import {TableData} from './sb-datatable.component.spec.data';
import {ExportToCsv} from 'export-to-csv';
import * as _ from 'lodash-es';
import {FilterPipe} from '../../pipes/filter/filter.pipe';
import {SbDataTablePipe} from '../../pipes/sb-data-table-pipe/sb-data-table.pipe';
import {ResourceService} from '../../services/resource/resource.service';
import {of as observableOf} from "rxjs";

describe('SbDatatableComponent', () => {
  let component: SbDatatableComponent;
  let fixture: ComponentFixture<SbDatatableComponent>;

  const resourceBundle = {
    'frmelmnts': {
      'lbl': {
        'clickHere': 'clickHere',
      }
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SbDatatableComponent, FilterPipe, SbDataTablePipe],
      imports: [FormsModule],
      providers: [{provide: ResourceService, useValue: resourceBundle}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onchanges', () => {
    component.data = TableData.responseData;
    component.columns = TableData.columns;
    component.ngOnChanges();
    expect(JSON.stringify(component.tableData)).toBe(JSON.stringify(component.data))
  });

  it('should call oninit', () => {
    spyOn(component, 'onColumnFilter').and.stub();
    component.keyUp.next({value: 'andhra', key: 'state'});
    component.ngOnInit();
    expect(component.onColumnFilter).toHaveBeenCalledWith('state', 'andhra');
  });

  it('should call onColumnFilter', () => {
    spyOn(component, 'filterDataTable').and.stub();
    component.onColumnFilter('state', 'andhra');
    expect(component.filterDataTable).toHaveBeenCalled();
  });


  it('should call onColumnFilter', () => {
    component.listFilter = {'state': 'andhra'}
    spyOn(component, 'filterDataTable').and.stub();
    component.onColumnFilter('state', '');
    expect(component.filterDataTable).toHaveBeenCalled();
  });

  it('should call filterDataTable', () => {
    component.data = TableData.responseData;
    component.listFilter = {'state': 'Telengana', 'district': '', 'noofEnrollments': null}
    component.filterDataTable();
    expect(component.tableData).toEqual([{
      state: 'Telengana',
      district: 'Hydrabad',
      noofEnrollments: 45,
      noofCompletions: 15
    }]);
  });

  it('should call clearSearch', () => {
    component.clearSearch()
    expect(component.searchData).toBe('');
  });

  it('should call downloadCSVFile', () => {
    component.columns = TableData.columns;
    component.tableData = TableData.responseData;
    component.downloadCSVFile();
    expect(component.csvExporter instanceof ExportToCsv).toBeTruthy();
  });

  it('should call downloadUrl', () => {
    const mockData = {expires_at: '2020-09-15'};
    spyOn(component.downloadLink, 'emit').and.stub();
    component.downloadUrl('downloadUrls', mockData);
    expect(component.downloadLink.emit).toHaveBeenCalled();
  });

});
