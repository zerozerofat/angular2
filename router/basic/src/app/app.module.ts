import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {  RouterModule,  Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ArticleComponent } from './component/article/article.component';
import { LoginComponent } from './component/login/login.component';
import { ProtectedComponent } from './component/protected/protected.component';

import {AUTH_PROVIDERS} from './services/AuthService'
import {LoggedInGuard} from './guards/loggedIn.guard';

import {
  routes as childRoutes,
  ProductComponent,
  ProductComponentModule
} from './component/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'product', component: ProductComponent, children: childRoutes },
  { path: 'protected', component: ProtectedComponent,canActivate:[LoggedInGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ArticleComponent,
    LoginComponent,
    ProtectedComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ProductComponentModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})

export class AppModule { }

