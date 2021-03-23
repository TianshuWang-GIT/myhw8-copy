import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
@Component({
  selector: 'app-homeotherparts',
  templateUrl: './homeotherparts.component.html',
  styleUrls: ['./homeotherparts.component.css']
})
export class HomeotherpartsComponent implements OnInit {

  title=new Array(5);
  pic=new Array(5);
  popular_movie_url=new Array(20);
  id=new Array(5);
  constructor(slide:NgbCarouselConfig,private http:HttpClient) {
    // 
    slide.interval=-1;
    slide.keyboard=true;
    slide.pauseOnFocus=true;
    slide.pauseOnHover=true;
    
  }
  ngOnInit(): void {
    this.getPopular_Movie();
  }
  getPopular_Movie(){
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&page=1').subscribe((res:any)=>{
    console.log(res);
    })
  }
}
