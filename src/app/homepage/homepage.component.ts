import { Component, OnInit, ViewChild } from '@angular/core';
import {book} from '../models/book.model'
// import { bloomHasToken } from '@angular/core/src/render3/di';
import {ConfigService} from '../Http.service'
import {category} from '../models/category.model.'
import {news} from '../models/news.model'
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [NgbCarouselConfig]
})

export class HomepageComponent implements OnInit {

  @ViewChild('carousel',null) carousel: any;

  constructor( private ConfigService: ConfigService, config: NgbCarouselConfig,private router: Router) { 
    config.interval = 5000;
    config.keyboard = false;
  }

  pause() {
    this.carousel.pause();
  }

  booksCategoriesPlaceHolder = "إختر فئة";
  selectedCategory = "كل الفئات";
  booknameSearchPlaceHolder = "عنوان الكتاب";
  ReadBooksTitle = "تصفح الكتب";
  newArrival = "وصل حديثاً"
  mostRated = "الأكثر تقييماً"
  booksCategories  = [  "كل الفئات" ,"فلسفة" , "علوم" ,"تاريخ" ,"قصص"]
  BookDetails= "تفاصيل الكتاب"
  BorrowBook = "إحجز الكتاب";
  ReadMoreBooks = "تصفح المزيد";
  BooksCategoriesCompTitle = "فئات الكتب";
  NewsComponentTitle = "الإعلانات";
  libraryTime = "توقيت المكتبة"
  contactUs = "راسلنا"
  fastLinks = "روابط سريعة";
  fromToDays= "من الأحد إلى الخميس"
  fromToHours = "من ٧ صباحاً إلى ٢ مساءً";
  sendContactUs = "أرسل" 
  LinkOne = "الرابط 1"
  LinkTwo = "الرابط 2"
  LinkThree = "الرابط 3"
  LinkFour = "الرابط 4"
  LinkFive = "الرابط 5"
  sendYourText = "أرسل مقترحك"
  twittes="التغريدات"
  MediaCenterComponentTitle = "المركز الإعلامي"
  BooksArray : book[] = [];
  BooksFirstFour: book[] = [];
  sortedBooksByRate: book[] = [];
  categoriesArray: category[] = [];
  ChosenForYouBooks: book[] = [];
  newsList: news[] = [];
  tweetsList: news[] = [];
  loggedIn: boolean = false;
  ChosenForYou = "إخترنا لكم"

  getBooks() {
    this.ConfigService.getBooks()
      .subscribe(async res => {
        this.BooksArray.push.apply(this.BooksArray, res);
        console.log (this.BooksArray);
        await this.getFirstFour();
        this.getChosenForYouBooks();
        this.sortBooksArrayByRate();
      });
  }

  goToBookDetails(){
    this.router.navigate(['BookDetails']);
  }

  getCategories(){
    this.ConfigService.getCategories()
    .subscribe(async res => {
      this.categoriesArray.push.apply(this.categoriesArray, res);
    });
  }

  getNews(){
    this.ConfigService.getNews()
    .subscribe(async res => {
      this.newsList.push.apply(this.newsList, res);
    });
  }
  getTweets(){
    this.ConfigService.getTweets()
    .subscribe(async res => {
      this.tweetsList.push.apply(this.tweetsList, res);
    });
  }
  

  getFirstFour(){
    for(let i = 0 ; i <4 ; i++){
      this.BooksFirstFour.push(this.BooksArray[i])
    }
  }

  goToSignIn(){
    this.router.navigate(['SignIn']);
  }

  sortBooksArrayByRate(){
    this.BooksArray.forEach(element => {
      this.sortedBooksByRate.push(element)
   });
    this.sortedBooksByRate = this.sortedBooksByRate.sort((a, b) => b.rate - a.rate);
    for(let i = 0 ; i <4 ; i++){
      this.sortedBooksByRate.splice(4)
    }
  }

  getChosenForYouBooks(){
    this.BooksArray.forEach(element => {
      this.ChosenForYouBooks.push(element)
   });
       this.ChosenForYouBooks.splice(0,5)
   }

  ngOnInit() {
    if (sessionStorage.getItem("login") == "true"){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }

    this.getBooks();
    this. getCategories();
    this.getNews();
    this.getTweets()
  }

}

