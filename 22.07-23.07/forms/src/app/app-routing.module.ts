import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemComponent } from './item/item.component';
import { NumberViewComponent } from './number-view/number-view.component';

const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'item/:breed/:name', component: ItemViewComponent },
  { path: 'number/:index/:generated', component: NumberViewComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }