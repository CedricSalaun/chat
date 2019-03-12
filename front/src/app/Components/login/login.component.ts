import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { LoginService } from '../../service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    public constructor(private readonly _fb: FormBuilder,
                       private readonly _loginService: LoginService) {}

    public ngOnInit(): void {
        this.loginForm = this._fb.group({
            user: [ { value: '', disabled: false }, Validators.required ],
            password: [ { value: '', disabled: false }, Validators.required ]
        });
    }

    public submitForm(): void {
        this._loginService.login(this.loginForm.value).pipe(first()).subscribe(
            (response: any) => localStorage.setItem('chat_key', response),
            (error: any) => console.error({ error })
        );
    }
}
