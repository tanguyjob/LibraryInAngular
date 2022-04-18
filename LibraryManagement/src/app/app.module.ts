import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookComponent } from './book/book.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { TestComponent } from './test/test.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AuthorComponent } from './author/author.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreateBindingBookAuthorComponent } from './create-binding-book-author/create-binding-book-author.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateAddressComponent } from './create-address/create-address.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TopBarComponent,
    CreateBookComponent,
    TestComponent,
    CatalogComponent,
    AuthorComponent,
    CreateAuthorComponent,
    CreateBindingBookAuthorComponent,
    UsersComponent,
    CreateUserComponent,
    CreateAddressComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
       { path: '', component: CatalogComponent },
       { path: 'home', component: CatalogComponent },
       { path: 'book', component: BookComponent },
       { path: 'create-book', component: CreateBookComponent },
       { path: 'test', component: TestComponent},
       { path: 'author', component: AuthorComponent},
       { path: 'create-author', component: CreateAuthorComponent },
       { path: 'book-author', component: CreateBindingBookAuthorComponent },
       { path: 'users', component:UsersComponent },
       { path: 'create-user', component:CreateUserComponent },
       { path: 'create-address', component:CreateAddressComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
