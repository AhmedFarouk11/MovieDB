import { MoviesService } from './../service/movies.service';
import { Component, inject, OnInit, } from '@angular/core';
import { IMovie } from '../Interfaces/imovie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  private moviesService = inject(MoviesService)
  movies:IMovie[] = []
  mysubscribe:any

  ngOnInit(): void {
   this.mysubscribe = this.moviesService.getMovies().subscribe(
      {
        next: (res) => {
          this.movies = res.results
        
        },
        error: (err) => {
          console.log(err)

        },
        complete: () => {
        }
      }
    )

  }
  ngOnDestroy(): void {
    this.mysubscribe.unsubscribe()
  }
}
