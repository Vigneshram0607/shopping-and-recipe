import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error: string = null;

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        console.log('FORM: ', form.value);
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        this.isLoading = true;

        let authObs: Observable<AuthResponseData>;

        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        } else {
            this.authService.signUp(email, password)
        }

        authObs.subscribe(
            resData => {
                console.log('AUTH RESPONSE DATA: ', resData);
                this.isLoading = false;
            },
            errorMessage => {
                console.log('AUTHENTICATION ERROR: ', errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            }
        )


        form.reset();
    }
}