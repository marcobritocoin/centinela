import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { MensajeriaComponent } from './components/shared/mensajeria/mensajeria.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { SettingComponent } from './components/shared/setting/setting.component';
import { QuickmenuComponent } from './components/shared/quickmenu/quickmenu.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarloginComponent } from './components/shared/navbarlogin/navbarlogin.component';
import { SmsComponent } from './pages/sms/sms.component';
import { FooterLoginComponent } from './components/shared/footer-login/footer-login.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { EmailmarketingComponent } from './pages/emailmarketing/emailmarketing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    MensajeriaComponent,
    ModalComponent,
    SettingComponent,
    QuickmenuComponent,
    DashboardComponent,
    NavbarloginComponent,
    RegistroComponent,
    SmsComponent,
    FooterLoginComponent,
    WhatsappComponent,
    EmailmarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }