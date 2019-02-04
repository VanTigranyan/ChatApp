import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';
import { AppEffects } from './store/app.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

// Material Modules
import { MatToolbarModule,
         MatSidenavModule,
         MatIconModule,
         MatInputModule,
 } from '@angular/material';
import { ContentComponent } from './content/content.component';
import { ChatItemComponent } from './sidenav/chat-item/chat-item.component';
import { IncomingComponent } from './content/incoming/incoming.component';
import { OutcomingComponent } from './content/outcoming/outcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    ChatItemComponent,
    IncomingComponent,
    OutcomingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({appState: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Chat App Store Devtools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    // Material Modules
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
