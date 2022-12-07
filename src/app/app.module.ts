import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ShortDomainPipe } from './pipes/short-domain.pipe';
import { CommentsComponent } from './components/comments/comments.component';
import { MainComponent } from './components/main/main.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortDomainPipe,
    CommentsComponent,
    MainComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
