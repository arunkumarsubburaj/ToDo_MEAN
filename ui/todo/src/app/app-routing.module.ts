import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { BinComponent } from './pages/bin/bin.component';
import { HashtagComponent } from './pages/hashtag/hashtag.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'archive', component: ArchiveComponent },
  { path: 'bin', component: BinComponent },
  { path: 'hashtag', component: HashtagComponent }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
