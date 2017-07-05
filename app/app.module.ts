import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductComponentList }  from './products/product-list.component';
import { ProductFilterPiple }  from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ProductComponentList,ProductFilterPiple,StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
