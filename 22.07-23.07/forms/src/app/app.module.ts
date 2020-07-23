import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemComponent } from './item/item.component';
import { ShortenPipe } from './item-view/shorten.pipe';
import { NumberViewComponent } from './number-view/number-view.component';
import { DoublePipe } from './number-view/double.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ItemViewComponent,
    ItemComponent,
    ShortenPipe,
    NumberViewComponent,
    DoublePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
