import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const five_characters_text: string = '12345';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Default Tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Login form tests', () => {

    it('Should create a form with 2 fields with its names', () => {
      expect(component.loginForm.contains('email')).toBeTruthy();
      expect(component.loginForm.contains('password')).toBeTruthy();
    });

    it('email should be required', () => {
      const control = component.loginForm.get('email');
      control!.setValue('');
      expect(control!.valid).toBeFalsy();
    });

    it('password should be required', () => {
      const control = component.loginForm.get('password');
      control!.setValue('');
      expect(control!.valid).toBeFalsy();
    });

    it('password must have at least 6 characters ', () => {
      const control = component.loginForm.get('password');
      control!.setValue(five_characters_text);
      expect(control!.valid).toBeFalsy();
    });

    it('the form is invalid if is empty', () => {
      expect(component.loginForm.valid).toBeFalsy();
    });

    it('the form is valid if it was completed with correct data', () => {
      const email = component.loginForm.get('email');
      email!.setValue('correo@gmail.com');
      const password = component.loginForm.get('password');
      password!.setValue('1234567');
      expect(component.loginForm.valid).toBeTruthy();
    });

  });


});
