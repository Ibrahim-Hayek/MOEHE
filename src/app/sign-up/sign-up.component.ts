import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfigService} from '../Http.service'
import {category} from '../models/category.model.'
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder,private ConfigService: ConfigService,) { }

  personalData = "بيانات شخصية"
  educationalData = "بيانات دراسية"
  NextButton = "التالي"
  BackButton = "السابق"
  ResetButton = "إعادة تعيين"
  finalStep = "تسجيل الحساب" ;
  Firstname = "الاسم"
  Lastname = "الشهرة"
  ChooseAdate = "تاريخ الولادة"
  Email = "البريد الإلكتروني"
  SelectAddress = "السكن"
  phonenumber = "رقم الجوال";
  AddInput = "إضافة شهادة";
  deleteLast = "حذف أخر سجل";
  SelectedCategoriesTopLabel = "العناصر المحددة";
  defaultLabel="إختر الفئات المفضلة";
  UserName = "اسم المستخدم"
  Password = "كلمة المرور"
  ConfirmPassword = "تأكيد كلمة المرور ";
  submitForm = "تسجيل"
  countriesList = [] ;
  categoriesArray : category[] = [];
  categoriesSelectItems = [];
  selectedCategories = [];
  selectedItemsLabel =  "عناصر محددة "

   getCategories(){
    this.ConfigService.getCategories()
    .subscribe(async res => {
      this.categoriesArray.push.apply(this.categoriesArray, res);
      this.categoriesArray.forEach(element => {
        let category = {label: "",value:""}
        category.label = element.name;
        category.value = element.name;
        this.categoriesSelectItems.push(category)
      });
    });
  }
  inputs = [
    {value : "إسم الشهادة",type:"text"},
    {value : "إسم الجامعة",type:"text"},
   {value : "النتيجة",type:"text"},
   {value : "تحميل مرفق",type:"fileupload"},
  ]
 
  addInput()  {
    this.inputs.push({value : "إسم الشهادة",type:"text"},
    {value : "إسم الجامعة",type:"text"},
   {value : "النتيجة",type:"text"},
   {value : "تحميل مرفق",type:"fileupload"},);
  }

  removeInputs(){
    let lastindx = this.inputs.length - 4 ;
    this.inputs.splice(lastindx)
  }
  getCountries(){
    this.ConfigService.getContries()
    .subscribe(async res => {
      this.countriesList.push.apply(this.countriesList, res);
      console.log(this.countriesList)
    });
  }
  
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  ngOnInit() {
    this. getCountries();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.getCategories();
  }

}
