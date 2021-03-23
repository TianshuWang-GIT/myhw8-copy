import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title=new Array(5);
  pic=new Array(5);
  //首页五个电影的名字
  name=new Array(5);
  popular_movie_url=new Array(20);
  id=new Array(5);
  constructor(config:NgbCarouselConfig,private http:HttpClient) {
    // 
    config.interval=3000;
    config.showNavigationArrows=true;
    config.keyboard=true;
    config.pauseOnHover=true;
    config.pauseOnHover=true;
    
  }
  ngOnInit(): void {
    this.getData();
    this.show();
  }
  public flag:boolean;
  list=new Array(window.localStorage.length);
  show(){
    var storage=window.localStorage;
    this.flag=(storage.length==0);
    for(var i=storage.length-1;i>-1;i--){
       var keyvalue=storage.key(i);
       this.list[i]=JSON.parse(storage.getItem(keyvalue));
    }
    console.log(this.list);
  }

  getData(){
     console.log("try")
     this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4d3827e042b4e0f00bf1c165631f8e9c&language=en-US&page=1').subscribe((res:any)=>{
     for(var i=0;i<5;i++){
       this.pic[i]="https://image.tmdb.org/t/p/w780"+res['results'][i]['backdrop_path'];
       this.id[i]=res['results'][i]['id'];
       this.name[i]=res['results'][i]['title'];
    //console.log(this.id[i])
      }
      console.log(res['results']);
   })
  }
}


