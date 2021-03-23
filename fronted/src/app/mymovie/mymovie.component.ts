import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {DomSanitizer} from '@angular/platform-browser';
import { $ } from 'protractor';


@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.css'],

})
export class MymovieComponent implements OnInit {
  public id: number; 
  public name:string;
  public tagline:string;
  public result:any;
  public year:string;
  public rate:string;
  public length:string;
  public language:string;
  public spoken:any;
  public a:number;
  public b:number;
  public genres:string;
  public genre:any;
  public youtube_id:string;
  public youtube_url:string;
  public overview:string;
  public twitter:string;
  private _success = new Subject<string>();
  private _remove = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  removeMessage='';
   

  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(private routeInfo: ActivatedRoute,private http:HttpClient,private http1:HttpClient,private sanitizer:DomSanitizer) { 
    this.sanitizer = sanitizer;   
  }
  
  ngOnInit(): void {
    this.id=this.routeInfo.snapshot.params['id'];
    this.require_movie_detail();
    this.get_youtube_vedio();
    this._success.subscribe(message => this.successMessage = message);
    this._remove.subscribe(message => this.removeMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        document.getElementById('remove').style.display="block";
        document.getElementById('added').style.display="none";
        this.selfClosingAlert.close();
        
      }
    });
    this._remove.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        document.getElementById('remove').style.display="none";
        document.getElementById('added').style.display="block";
        this.selfClosingAlert.close();
      
      }
    });
  }

  public changeSuccessMessage() { this._success.next("Added to WatchList"); }
  public removeSuccessMessage() { this._remove.next("Remove from WatchList"); }
 

   
  require_movie_detail(){
    this.http.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=4d3827e042b4e0f00bf1c165631f8e9c&language=en-US&page=1').subscribe((res:any)=>{
      this.result=res;
      this.a=res['spoken_languages'].length;
      this.b=res['genres'].length;
      this.spoken=new Array(this.a);
      this.genre=new Array()
      this.language="";
      this.genres=""
      for(var i=0;i<this.a;i++){
        this.language+=res['spoken_languages'][i]['name']+" ";
      }
      for(var j=0;j<this.b;j++){
        if(j===this.b-1){
          this.genres+=res['genres'][j]['name'];
        }else{
        this.genres+=res['genres'][j]['name']+",";
        }
      
      }
      this.name=this.result['title'];
      this.tagline=this.result['tagline'];
      this.year=this.result['release_date'].substr(0,4);
      this.rate=this.result['vote_average'];
      this.overview=this.result['overview'];
      this.length=Math.floor(parseInt(this.result['runtime'])/60)+" hours "+parseInt(this.result['runtime'])%60+" minutes";
    
      var obj={"id":this.id,"title":this.name,"poster_path":this.result['poster_path']}
      localStorage.clear();
      //localStorage.setItem(this.id.toString(),JSON.stringify(obj))
     /*  if(JSON.parse(localStorage.getItem(this.id.toString()))==undefined){
        localStorage.setItem(this.id.toString(),JSON.stringify(obj));
        console.log('new');
        
      }
      else{
        localStorage.removeItem(this.id.toString());
        localStorage.setItem(this.id.toString(),JSON.stringify(obj));
        console.log('renew');
    
      } */
     
    })
  }

  get_youtube_vedio(){
    this.http1.get('https://api.themoviedb.org/3/movie/'+this.id+'/videos?api_key=4d3827e042b4e0f00bf1c165631f8e9c&language=en-US&page=1').subscribe((res:any)=>{
         if(res['results'].length==0) this.youtube_id="tzkWB85ULJY";
         else{
           this.youtube_id=res['results'][0]['key'];
         }
       
         this.youtube_url="http://www.youtube.com/embed/"+this.youtube_id;
         this.twitter="https://twitter.com/intent/tweet?hashtags=USC&hashtags=CSCI571&hashtags=FightOn&original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=Watch&url=https%3A%2F%2Fwww.youtube.com%2Fembed%2F"+this.youtube_id;
    
    })
   
  };

  photoURL(){
    return  this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube_url)
  }




}
