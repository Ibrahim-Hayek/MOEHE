import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../http.service'
import {bookCopy} from '../models/bookCopy.model'
import {comment} from '../models/comment.model'

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {

  constructor(private ConfigService: ConfigService) { }

  BookTitle = "عنوان الكتاب";
  Auther = "اسم الكاتب";
  category = "الفئة";
  SelectedCategory = "ثقافة عامة";
  descriptionTitle = "ملخص الكتاب";
  descriptionText = "تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب تفاصيل ملخص الكتاب ";
  rate = 3;
  newRate = 0;
  rateTitle = "معدل التقييم";
  NumberOfReads = 70;
  NumberOfReadsText = "قارئ";
  addYourRate = "أضف تقيمك";
  ShareTheBook = "مشاركة الكتاب";
  booksCopies= "نسخ الكتاب";
  BarcodeText = "باركود";
  CopyStatusText = "حالة النسخة"
  AvailableBook = "متواجدة";
  NotAvailableBook = "محجوزة حتى ";
  LocationInLibrary = "الموقع في المكتبة";
  ReserveBook = "إحجز نسخة";
  AdditionalTitle = "معلومات إضافية عن الكتاب";

  AdditionalOne = "الرقم الدولي";
  AdditionalTwo = "تاريخ الطابعة";
  AdditionalThree = "رقم التصنيف";
  AdditionalFour = "تاريخ الإضافة إلى المكتبة";
  commentsTitle = "التعليقات";
  AddcommentInput = "أضف تعليق";
  CommentsTotalText = "المجموع";
  CommentsTotal :number = 0 ;
  viewAllComments = "إظهار كل التعليقات";



 

  BooksCopiesArray : bookCopy[] = [];
  CommentsArray : comment[] = [];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1, "rtl":true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]};

  getBookCopies(){
    this.ConfigService.getBookCopies()
    .subscribe(async res => {
      this.BooksCopiesArray.push.apply(this.BooksCopiesArray, res);
      console.log(this.BooksCopiesArray);
    });
  }

  getComments(){
    this.ConfigService.getComments()
    .subscribe(async res => {
      this.CommentsArray.push.apply(this.CommentsArray, res);
      console.log(this.CommentsArray)
      this.CommentsTotal = this.CommentsArray.length

    });
  }
  display: boolean = false;

  showDialog(){
    this.display = true;

  }
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
  breakpoint(e) {
    console.log('breakpoint');
  }
  slickInit(e) {
    console.log('slick initialized');
  }
  ngOnInit() {
    this.getBookCopies();
    this.getComments()
  }

}
  