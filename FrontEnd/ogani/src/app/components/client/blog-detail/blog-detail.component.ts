import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/_service/blog.service';
import { TagService } from 'src/app/_service/tag.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  listTag : any;
  listBlogNewest: any;
  blog: any;
  id: any;


  constructor(private router: Router,private route: ActivatedRoute,private blogService: BlogService,private tagService: TagService){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBlog();
    this.getListTag();
    this.getListNewest();
  }


  getListTag(){
    this.tagService.getListTag().subscribe({
      next: res =>{
        this.listTag = res;
      },error: err=>{
        console.log(err);
      }
    })
  }

  getBlog(){
    this.blogService.getBlog(this.id).subscribe({
      next: res =>{
        this.blog = res;
        console.log(this.blog);
      },error: err=>{
        console.log(err);
      }
    })
  }

  getListNewest(){
    this.blogService.getListNewest(3).subscribe({
      next: res =>{
        this.listBlogNewest = res;
      },error: err=>{
        console.log(err);
      }
    })
  }


}
