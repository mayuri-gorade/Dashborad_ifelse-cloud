import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APIInterceptor } from './shared/interceptors/interceptors.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatIconModule} from '@angular/material/icon';
import{MatListModule} from'@angular/material/list';
import{MatButtonModule} from '@angular/material/button';
import{MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import{MatMenuModule} from '@angular/material/menu';
import{MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import{MatBadgeModule} from '@angular/material/badge';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { BarComponent } from './bar/bar.component';
import { NgChartsModule } from 'ng2-charts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TableComponent,
    NewUsersComponent,
    BarComponent,
    LineChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgChartsModule,
    CanvasJSAngularChartsModule,
    HighchartsChartModule
  ],
 providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: APIInterceptor,
        multi: true,
      },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
