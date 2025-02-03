import { ITv } from '../Interfaces/itv';
import { TvService } from './../service/tv.service';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  tvService = inject(TvService);
  MyTV: ITv[] = [];
  MySucscribeTv: Subscription | undefined; // Use Subscription type and make it optional

  constructor() { }

  ngOnInit(): void {
    // Assign the subscription to MySucscribeTv
    this.MySucscribeTv = this.tvService.getTv().subscribe({
      next: (res) => {
        this.MyTV = res.results;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    });
  }

  ngOnDestroy(): void {
    // Check if MySucscribeTv exists before unsubscribing
    if (this.MySucscribeTv) {
      this.MySucscribeTv.unsubscribe();
    }
  }
}