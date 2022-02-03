import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartMenuComponent } from './cart-menu/cart-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrderedComponent } from './ordered/ordered.component';
import { AuthentificationService } from './services/authentification.service';
import { AuthgardService } from './services/authgard.service';
import { TestcatalogComponent } from './testcatalog/testcatalog.component';
import { CatalogdeuxComponent } from './catalogdeux/catalogdeux.component';
import { BookAuthorComponent } from './book-author/book-author.component';
import { BookAuthorModel } from './models/BookAuthorModel';
import { AuthorComponent } from './author/author.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ProfilComponent } from './profil/profil.component';



@NgModule({
  declarations: [
    AppComponent,
    CartMenuComponent,
    TopBarComponent,
    HomeComponent,
    NotFoundComponent,
    CatalogComponent,
    BookComponent,
    LoginComponent,
    CartComponent,
    OrderedComponent,
    TestcatalogComponent,
    CatalogdeuxComponent,
    BookAuthorComponent,
    AuthorComponent,
    AuthorDetailComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path:'author-detail/:id', component: AuthorDetailComponent},
      { path: 'catalog', component: CatalogComponent},
      { path: 'book/:id', component: BookComponent},
      { path: 'login', component: LoginComponent},
      { path:'cart', canActivate:[AuthgardService], component: CartComponent},
      { path:'ordered', component: OrderedComponent},
      { path:'test', component:TestcatalogComponent },
      { path:'c2', component: CatalogdeuxComponent}, 
      { path:'author', component: AuthorComponent},
      { path:'book-author/:id', component: BookAuthorComponent },
      { path: 'profil', canActivate:[AuthgardService], component: ProfilComponent },
      { path: 'notfound', component: NotFoundComponent},
      { path:'**', redirectTo: 'notfound'}
    ])
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
