import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncompleteCandidateListPage } from './incomplete-candidate-list.page';

describe('IncompleteCandidateListPage', () => {
  let component: IncompleteCandidateListPage;
  let fixture: ComponentFixture<IncompleteCandidateListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncompleteCandidateListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncompleteCandidateListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
