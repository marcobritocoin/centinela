import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { SmsComponent } from './pages/sms/sms.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { EmailmarketingComponent } from './pages/emailmarketing/emailmarketing.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent ,
  canActivate: [ AuthGuard ],
  children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sms', component: SmsComponent },
    { path: 'whatsapp', component: WhatsappComponent },
    { path: 'emailmarketing', component: EmailmarketingComponent },
    { path: '', component: SmsComponent },
  ]},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule 
  ]
})
export class AppRoutingModule { }

