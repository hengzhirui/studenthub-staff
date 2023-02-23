import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignedCompanyListPage } from './assigned-company-list.page';

describe('AssignedCompanyListPage', () => {
  let component: AssignedCompanyListPage;
  let fixture: ComponentFixture<AssignedCompanyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedCompanyListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignedCompanyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
