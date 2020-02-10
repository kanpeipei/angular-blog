import { Blog } from './../../interfaces/blog';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getBlog();
  }
  
  getBlog(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(id).subscribe(
      blog => this.blog = blog
      );
  }

}