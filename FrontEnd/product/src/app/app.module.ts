import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    ToastrModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
