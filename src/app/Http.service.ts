import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  baseUrl = 'assets/DB/';

getBooks() {
  return this.http.get(this.baseUrl + 'booksList.json');
}
getCategories() {
    return this.http.get(this.baseUrl + 'categoriesList.json');
  }
  getNews() {
    return this.http.get(this.baseUrl + 'newsList.json');
  }
  getTweets(){
    return this.http.get(this.baseUrl + 'tweetsList.json');
  }
  getComments(){
    return this.http.get(this.baseUrl + 'comments.json');
  }
  
  getBookCopies(){
    return this.http.get(this.baseUrl + 'bookCopies.json');
  }
 
  getContries(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

}