import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }

  LoginText = "تسجيل الدخول"
  UsernameLabel = "إسم المستخدم"
  PasswordLabel = "كلمة المرور"
  forgetPasswordLink = "نسيت كلمة المرور؟"
  signInButton = "تسجيل الدخول"
  otherLoginTitle = "أو سجل عبر"
  dontHaveAcountText = "ليس لديك حساب؟" 
  signupNow = "سجل الان";

  login(){
    sessionStorage.setItem("login","true");
    this.router.navigate(['/']);
  }
  goToSignUp(){
    this.router.navigate(['SignUp']);
  }
  ngOnInit() {
  }

}
