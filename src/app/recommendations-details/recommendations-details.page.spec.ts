import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendationsDetailsPage } from './recommendations-details.page';

describe('RecommendationsDetailsPage', () => {
  let component: RecommendationsDetailsPage;
  let fixture: ComponentFixture<RecommendationsDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
