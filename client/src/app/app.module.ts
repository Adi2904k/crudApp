import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LibraryComponent } from './library/library.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeCreateComponent,
        EmployeeUpdateComponent,
        EmployeeDetailsComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        LibraryComponent,
        PlayerComponent,
        PlaylistComponent,
        SearchComponent,
        ProfileComponent,
        SettingsComponent,
        ErrorpageComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterOutlet,
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}