import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-account', component: UserAccountComponent},
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
