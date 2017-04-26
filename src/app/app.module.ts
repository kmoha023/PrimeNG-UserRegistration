//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './directives/alert.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
//Guard
import { AuthGuard } from './guard/auth.guard';

/*used to create fake backend--
This is where the fake backend provider is added to the application, to switch to a real backend simply 
remove the providers located under the comment "// providers used to create fake backend".*/
import { fakeBackendProvider } from './fakebackend/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';

//Routing module
import { routing } from './app.routing';
 
//Services module
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
 
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }