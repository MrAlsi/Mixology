import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchermataDrinkGiocoPage } from './schermata-drink-gioco.page';

describe('SchermataDrinkGiocoPage', () => {
  let component: SchermataDrinkGiocoPage;
  let fixture: ComponentFixture<SchermataDrinkGiocoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchermataDrinkGiocoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchermataDrinkGiocoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
