import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendationsDetailsTwoPage } from './recommendations-details-two.page';

describe('RecommendationsDetailsTwoPage', () => {
  let component: RecommendationsDetailsTwoPage;
  let fixture: ComponentFixture<RecommendationsDetailsTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsDetailsTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationsDetailsTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
