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
@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeCreateComponent,
        EmployeeUpdateComponent,
        EmployeeDetailsComponent,
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