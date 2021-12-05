import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MemeApiService } from './meme-api.service';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchMemeComponent } from './search-meme/search-meme.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderComponent } from './loader/loader.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserDataComponent } from './user-data/user-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { SingleUserDataComponent } from './user-data/single-user-data/single-user-data.component';
import { RelationshipStatusComponent } from './relationship-status/relationship-status.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchMemeComponent,
    DemoComponent,
    PageNotFoundComponent,
    LoaderComponent,
    ServerErrorComponent,
    UserDataComponent,
    SingleUserDataComponent,
    RelationshipStatusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [MemeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
