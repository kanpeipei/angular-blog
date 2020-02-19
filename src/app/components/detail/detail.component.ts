import { trigger, transition, style, animate, query, keyframes } from '@angular/animations';
import { Blog } from './../../interfaces/blog';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations:[
    trigger('enterAnimation',[
      transition(':enter', [
          style({
            opacity:0,
            transform:'translate(0,20px)'
          }),
          animate('0.7s',keyframes([
            style({opacity:0.2,transform:'translate(0, 10px)'}),
            style({opacity:0.6,transform:'translate(0, 2px)'}),
            style({opacity:1,transform:'translate(0, 0)'}),
          ])
          )
      ])
    ])
  ]
})
export class DetailComponent implements OnInit {

  blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    console.log("getblog");
    this.getBlog();
  }
  
  getBlog(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(id).subscribe(
      blog => this.blog = blog
      );
  }

}