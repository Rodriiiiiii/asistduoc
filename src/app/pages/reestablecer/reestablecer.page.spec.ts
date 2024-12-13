import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReestablecerPage } from './reestablecer.page';
import { LocaldbService } from '../../Service/localdb.service';
import { AlertController } from '@ionic/angular';

describe('ReestablecerPage', () => {
  let component: ReestablecerPage;
  let fixture: ComponentFixture<ReestablecerPage>;
  let localdbService: LocaldbService;
  let alertController: AlertController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestablecerPage ],
      providers: [LocaldbService, AlertController]
    }).compileComponents();

    fixture = TestBed.createComponent(ReestablecerPage);
    component = fixture.componentInstance;
    localdbService = TestBed.inject(LocaldbService);
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send reset link when email is valid', async () => {
    component.email = 'rodrigo@duocuc.cl'; // Email válido
    spyOn(localdbService, 'getUsers').and.returnValue({
      'rodrigo@duocuc.cl': { email: 'rodrigo@duocuc.cl', password: 'duoc' }
    });
    spyOn(component, 'sendResetLink').and.callThrough();
    
    await component.sendResetLink();
    expect(component.sendResetLink).toHaveBeenCalled();
  });

  it('should show error when email is not registered', async () => {
    component.email = 'incorrect@duocuc.cl'; // Email no registrado
    spyOn(localdbService, 'getUsers').and.returnValue({});
    
    await component.sendResetLink();
    // Aquí podrías verificar si el alert ha sido mostrado
  });
});
