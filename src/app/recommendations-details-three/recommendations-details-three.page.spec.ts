import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendationsDetailsThreePage } from './recommendations-details-three.page';

describe('RecommendationsDetailsThreePage', () => {
  let component: RecommendationsDetailsThreePage;
  let fixture: ComponentFixture<RecommendationsDetailsThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsDetailsThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationsDetailsThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
