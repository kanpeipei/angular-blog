import { BlogService } from './../../services/blog.service';
import { Blog } from './../../interfaces/blog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogService.getAllBlog().subscribe(
      blogs => this.blogs = blogs
    );
  }

}
