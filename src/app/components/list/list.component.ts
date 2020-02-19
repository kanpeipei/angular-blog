import { BlogService } from './../../services/blog.service';
import { Blog } from './../../interfaces/blog';
import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, query, animate, stagger, group } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('popUpAnimations', [
      transition('* => *', [
        query('mat-card', [
          style({boxShadow:'0px 0px'}),
          stagger(100, [
              animate('0.3s', style({boxShadow: '10px 5px 20px 0px'}))
          ])
        ])
      ])
    ])
  ]
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
