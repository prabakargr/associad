import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendationsDetailsFourPage } from './recommendations-details-four.page';

describe('RecommendationsDetailsFourPage', () => {
  let component: RecommendationsDetailsFourPage;
  let fixture: ComponentFixture<RecommendationsDetailsFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsDetailsFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationsDetailsFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
