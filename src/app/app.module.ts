
import{HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserformComponent } from './userform/userform.component';
import { RouterModule, Routes } from '@angular/router';import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
const appRoutes: Routes = [
  { path: '', component: UserformComponent },
  { path: 'search', component: SearchComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserformComponent,
    SearchComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  ),
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
