import { Component, inject, OnInit } from '@angular/core';
import { TrendingService } from '../service/trending.service';
import { ITrending } from '../Interface/itrending';

@Component({
  selector: 'app-latest-trailerr',
  imports: [],
  templateUrl: './latest-trailerr.component.html',
  styleUrl: './latest-trailerr.component.css'
})
export class LatestTrailerrComponent implements OnInit {
  private trendingService = inject(TrendingService)
  trending:ITrending[] = []
  mytrendSubscribe:any
  constructor() { }
  ngOnInit(): void {
    this.trendingService.GetTrending().subscribe({
      next: (res) => {
        this.trending = res.results
      //  console.log(res.results)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('completed')
      }
    }
    )
  }
  ngOnDestroy(): void {
    if (this.mytrendSubscribe) {
      this.mytrendSubscribe.unsubscribe()
    }
  }
}
