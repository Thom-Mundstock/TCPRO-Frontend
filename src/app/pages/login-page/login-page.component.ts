import { Component } from '@angular/core';
import { BaseButtonComponent } from '../../components/base-button/base-button.component';
import { AuthService } from '../../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseFormComponent } from '../../components/base-form/base-form.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

const controlNameUsToPt = new Map([
  ['username', 'Usuário'],
  ['password', 'Senha'],
]);

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    BaseButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    BaseFormComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  model: any;
  buttonName: string = 'Login';

  public formLogin: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.email, Validators.minLength(3)],
      ],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  signIn(): void {
    const { username, password } = this.formLogin.value;
    console.log('username: ', username, ' password: ', password);

    this.authService.login(username, password).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        this.router.navigateByUrl(returnUrl);
        this.formLogin.reset();
      },
      error: () => {
        this.buttonName = 'Login';
      },
      complete: () => {
        this.buttonName = 'Login';
      },
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  public isValidateForm(controlName: string): boolean {
    const control = this.formLogin.get(controlName);
    return !!(control?.touched && control?.invalid);
  }

  public getErrorMessage(controlName: string): string | null {
    const control = this.formLogin.get(controlName);

    if (control?.errors) {
      const errorsMessages = new Map([
        [
          'required',
          `O campo ${controlNameUsToPt.get(controlName)} é obrigatório`,
        ],
        [
          'minlength',
          `${controlNameUsToPt.get(controlName)} deve ter no mínimo ${
            control.errors?.['minlength']?.requiredLength || 0
          } caracteres`,
        ],
        ['email', `Digite um e-mail válido`],
      ]);

      return errorsMessages.get(Object.keys(control?.errors)[0]) || '';
    }

    return null;
  }
}
