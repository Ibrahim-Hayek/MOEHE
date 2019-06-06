import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
 import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './Http.service'
import {GalleriaModule} from 'primeng/galleria';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MatStepperModule} from '@angular/material/stepper';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {FileUploadModule} from 'primeng/fileupload';
import {DragDropModule} from 'primeng/dragdrop';
import {MultiSelectModule} from 'primeng/multiselect';
import { BarRatingModule } from "ngx-bar-rating";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {DialogModule} from 'primeng/dialog';

import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BooksDetailsComponent } from './books-details/books-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    BooksDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
     NgSelectModule,
    FormsModule,
    TabViewModule,
    HttpClientModule,
    GalleriaModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule  ,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatSelectModule,
    FileUploadModule,
    DragDropModule,
    MultiSelectModule,
    BarRatingModule,
    SlickCarouselModule,
    DialogModule,
    
    ],
  providers: [ConfigService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
