import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');}
  today = new Date;
  momentsDay : string = '' ;
  momentsDate : string = '' ;
  TodayDate = '';
  jstoday = '';
  OtherLanguage = "English"
  LogoBigTitle="المكتبة الإلكترونية"
  LogoSmallTitle="وزارة التعليم العالي"
  HomepageMenu = "الرئيسية"
  AboutLibraryMenu ="عن المكتبة"
  BooksCategoriesMenu = "فئات الكتب"
  NewsMainMenu = "الأخبار"
  localNewsMenu ="أخبار محلية"
  InternationalNewsMenu="أخبار عالمية"
  EventsMenu = "الفعاليات"
  philosophyMenu = "فلسفة"
  ScienceMenu = "علوم"
  HistoryMenu ="تاريخ"
  StoriesMenu ="قصص"
  signInButton="تسجيل الدخول"
  LoggedInUsername= "كميل";
  ProfileLink= "الحساب"
  MessagesLink = "الرسائل"
  NotificationsLink = "التنبيهات"
  SearchLink = "بحث";
  BookName = "إسم الكتاب"
  BookNumber = "رقم الكتاب"
  BookAuther = "اسم الكاتب"
  BookCategory = "فئة الكتاب"
  loggedIn : boolean = false
  goToSignIn(){
    this.router.navigate(['SignIn']);
  }
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['SignIn']);
  }

  goToProfile(){
      this.router.navigate(['Profile']);
  }
  
  ngOnInit() {
    this.momentsDay = moment().lang("ar").format('dddd');
    this.momentsDate = moment().lang("ar").format('LL');
    this.TodayDate = this.momentsDay + this.momentsDate;
    console.log(this.TodayDate)
    if (sessionStorage.getItem("login") == "true"){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }
  }
  displayAdvancedSearch: boolean = false;

  showDialog(){
    this.displayAdvancedSearch = true;

  }


}
