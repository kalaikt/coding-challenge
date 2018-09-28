import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public regForm: FormGroup;
  public subscriptions: Array<string> = ['Basic', 'Advanced', 'Pro'];
  public submitted = false;
  public areYouSure = false;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      emailAddress: new FormControl('',
        [ Validators.required,
        Validators.email]),
      subscribe: new FormControl('Advanced'),
      password: new FormControl('',
        [ Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$')
      ]),
    });
  }

  get emailAddress() {
    return this.regForm.get('emailAddress');
  }

  get subscribe() {
    return this.regForm.get('subscribe');
  }

  get password() {
    return this.regForm.get('password');
  }

  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
    }, 2000);

    if (this.regForm.invalid) {
      return;
    }

    this.userService.addUser(this.regForm.value);
    this.router.navigate(['/user']);
  }

  onReset() {
    if (!this.regForm.dirty) {
      return;
    }

    this.areYouSure = true;
  }

  onYes() {
    this.regForm.reset();
    this.areYouSure = false;
  }

  onNo() {
    this.areYouSure = false;
  }
}
