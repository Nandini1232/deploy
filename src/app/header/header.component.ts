import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../navigation.service';
import { User } from '../models';
import Swal from 'sweetalert2';

 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  sideNavStatus: boolean = true;
 
  registerForm: FormGroup;
  loginForm: FormGroup;
  passwordRequirements: any = {
    capital: false,
    small: false,
    number: false,
    special: false,
    length: false
  };
  constructor(private navigationService: NavigationService) {
    this.registerForm = new FormGroup({});
    this.loginForm = new FormGroup({});
  }
 
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cpwd: new FormControl('', [Validators.required]),

    });
    this.registerForm?.get('pwd')?.valueChanges.subscribe((value) => {
      this.updatePasswordRequirements(value);
  });
 
    this.loginForm = new FormGroup({
email: new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
    });
    this.loginForm?.get('pwd')?.valueChanges.subscribe((value) => {
      this.updatePasswordRequirements(value);
  });
  }
  updatePasswordRequirements(pwd: string): void {
    debugger
    this.passwordRequirements = {
      capital: /[A-Z]/.test(pwd),
      small: /[a-z]/.test(pwd),
      number: /\d/.test(pwd),
      special: /[@$!%*?&]/.test(pwd),
      length: pwd.length >= 8
    };
  }
  menuButtonClicked() {
    debugger
    this.sideNavStatus = !this.sideNavStatus;
    this.sideNavToggled.emit(this.sideNavStatus);
  }
 
  isLoggedIn(): boolean {
    return this.navigationService.isLoggedIn();
  }
 
  createAccount() {
    const newUser: User = {
        name: this.Name.value,
        email: this.Email.value,
        pwd: this.PWD.value,
        cpwd: this.CPWD.value,
        memberSince: new Date().toString(),
    };

    if (newUser.pwd === newUser.cpwd) {
        this.navigationService.register(newUser).subscribe((res: any) => {
            alert('Registered SUCCESSFULLY!!');
            newUser.id = parseInt(res);
        }, error => {
            console.error('Registration failed:', error);
            // Handle registration failure here
        });
    } else {
      Swal.fire({
        icon: 'warning',
        text: 'PASSWORDS DID NOT MATCH..!'
      });
        // Handle password mismatch here
    }
}
 
  loginUser() {
    this.navigationService
      .login(this.LEmail.value, this.LPWD.value)
      .subscribe((res: any) => {
        if (res.error) {
          alert('User Does Not Exisit!!');
        } else {
          this.navigationService.setUser(res);
          location.reload();
        }
      });
  }
 
  logOutUser() {
    this.navigationService.logOut();
    location.reload();
  }
 
  get Name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }
  get CPWD(): FormControl {
    return this.registerForm.get('cpwd') as FormControl;
  }
  get LEmail(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get LPWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
}