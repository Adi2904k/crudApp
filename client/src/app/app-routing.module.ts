import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './auth/login/login.component';
export const routes: Routes = [
    { path: '', redirectTo: 'Employee-list', pathMatch: "full"},
    { path: 'Employee-list', component: EmployeeListComponent },
    {path:'create-Employee', component:EmployeeCreateComponent},
    {path:'update-Employee/:id', component:EmployeeUpdateComponent},
    {path:'Employee-Detail/:id', component:EmployeeDetailsComponent},
    {path:'Home', component:HomeComponent},
    {path:'Library', component:LibraryComponent},
    {path:'player', component:PlayerComponent},
    {path:'playlist', component:PlaylistComponent},
    {path:'search', component:SearchComponent},
    {path:'profile', component:ProfileComponent},
    {path:'setting', component:SettingsComponent},
    {path:'error-page', component:ErrorpageComponent},
    {path:'login', component:LoginComponent},


];


@NgModule({

    imports: [RouterModule.forRoot(routes),],

    exports: [RouterModule]

})

export class AppRoutingModule { }