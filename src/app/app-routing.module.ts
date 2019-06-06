import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { HomepageComponent } from './homepage/homepage.component';
 import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {BooksDetailsComponent} from './books-details/books-details.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent } , 
  { path: 'BookDetails', component: BooksDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
