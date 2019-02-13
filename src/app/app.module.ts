import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Firebases
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// Componentes
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

// Servicios
import { ChatService } from './providers/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    FormsModule
  ],

  providers: [
    ChatService
  ],
  
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }