import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeftbarPage } from './leftbar.page';

describe('LeftbarPage', () => {
  let component: LeftbarPage;
  let fixture: ComponentFixture<LeftbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftbarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeftbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
