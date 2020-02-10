import { BlogService } from './../../services/blog.service';
import { Blog } from './../../interfaces/blog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

}
