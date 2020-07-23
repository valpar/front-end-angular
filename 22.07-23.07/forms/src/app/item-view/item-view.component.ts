import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit, OnDestroy {
  breed: string;
  name: string;
  paramSubscribe: Subscription;

  date: Date = new Date();

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.paramSubscribe = this.route.params.subscribe((params: Params)=>{
      this.breed = params['breed'];
      this.name = params['name'];
    })
  }

  ngOnDestroy(): void {
    this.paramSubscribe.unsubscribe();
  }
}
