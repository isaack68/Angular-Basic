import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule}  from "@angular/common/http";
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptor} from "@azure/msal-angular";
import { PublicClientApplication, InteractionType} from "@azure/msal-browser";
import { HomeComponent } from './home/home.component';
import { AccessDialogComponent } from './components/access-dialog/access-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

const isIE = 
  window.navigator.userAgent.indexOf("MSIE") > -1 || 
  window.navigator.userAgent.indexOf("Trident/") > -1;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccessDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: "",
          authority: "",
          redirectUri: ""
        },
        cache: {
          cacheLocation: "localStorage",
          storeAuthStateInCookie: isIE
        }
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ["user.read"]
        }
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ["Endpoint Here/v1.0/me", ["user.read"]]
        ])
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
