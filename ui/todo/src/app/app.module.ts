import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { AngularMaterial } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BinComponent } from './pages/bin/bin.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { HashtagComponent } from './pages/hashtag/hashtag.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentAreaComponent,
    HomeComponent,
    BinComponent,
    ArchiveComponent, HashtagComponent, AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterial,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
