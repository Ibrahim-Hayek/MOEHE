import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profileName = "كميل أبي خليل";
  profileDate = "25/02/2019";
  editProfileButton =  "تعديل الملف";
  personalInfo = "معلوماتي الشخصية";
  myHold = "حجوزاتي";
  myBorrows = "استعاراتي";
  constructor() { }

  ngOnInit() {
  }

}
