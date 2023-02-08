import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BlogService } from 'src/app/_service/blog.service';
import { ImageService } from 'src/app/_service/image.service';
import { StorageService } from 'src/app/_service/storage.service';
import { TagService } from 'src/app/_service/tag.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [MessageService]

})
export class BlogComponent implements OnInit {

  listBlog : any;
  listTag : any[] =[];
  listImage: any;
  username : any;
  selectedTags: any[] =[];
  
  onUpdate : boolean =false;
  showForm : boolean = false;
  showImage: boolean = false;
  onDelete: boolean = false;
  imageChoosen : any;
  image: any;
  disabled : boolean = true;

  selectedFiles ?: FileList;
  currentFile ?: File;


  blogForm : any = {
    id: null,
    title: null,
    description: null,
    content: null,
    imageId : null,
    tags: [],
  }

  constructor(private blogService: BlogService,private storageService: StorageService,private tagService: TagService,private imageService: ImageService,private messageService: MessageService){

  }

  ngOnInit(): void {
    this.username = this.storageService.getUser().username;
    this.getList();
    this.getListTag();
    this.getListImage();
  }


  uploadFile(event: any){
    this.selectedFiles = event.target.files;
    if(this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0);
      if(file){
        this.currentFile = file;
        this.imageService.upload(this.currentFile).subscribe({
          next: res =>{
            this.currentFile = undefined;
            this.getListImage();
          },error: err=>{
          }
        })
      }
      this.currentFile = undefined;
    }
  }

  showNew(){
    this.onUpdate = false;
    this.showForm = true;
    this.image = null;
    this.blogForm = {
      id: null,
      title: null,
      description: null,
      content: null,
      imageId : null,
      tags: [],
    }
  }
  showUpdate(data: any){
    this.selectedTags = [];
    this.onUpdate = true;
    this.showForm = true;
    this.blogForm.id = data.id;
    this.blogForm.title = data.title;
    this.blogForm.description = data.description;
    this.blogForm.content = data.content;
    this.image = data.image;
    data.tags.forEach( (res: any) =>{
      this.selectedTags.push(res.id);
    })
  }

  showDelete(id: number, title: string){
    this.onDelete=true;
    this.blogForm.id = id;
    this.blogForm.title = title;
  }


  onChooseImage(){
    this.showImage =true;
    this.disabled = true;
    let data = document.querySelectorAll('.list-image img');
      data.forEach(i =>{
        i.classList.remove('choosen');
    })  
  }

  getListImage(){
    this.imageService.getList().subscribe({
      next:res=>{
        this.listImage =res;
      },error: err=>{
        console.log(err);
      }
    })
  }


  getList(){
    this.blogService.getList().subscribe({
      next: res =>{
        this.listBlog =res;
      },error: err =>{
        console.log(err);
      }
    })
  }

  getListTag(){
    this.tagService.getListTag().subscribe({
      next: res=>{
        this.listTag = res;
      },error: err =>{
        console.log(err);
      }
    })
  }

  createBlog(){
    this.blogForm.tags = this.selectedTags;
    this.blogForm.imageId = this.image.id;
    const {title,description,content,imageId,tags} = this.blogForm;
    this.blogService.createBlog(title,description,content,imageId,tags,this.username).subscribe({
      next: res =>{
        this.getList();
        this.showForm = false;
        this.showSuccess("Tạo mới thành công");
      },error: err =>{
        this.showError(err.message);

      }
    })
  }

  updateBlog(){
    this.blogForm.tags = this.selectedTags;
    this.blogForm.imageId = this.image.id;
    const {id,title,description,content,imageId,tags} = this.blogForm;
    console.log(this.blogForm);
    this.blogService.updateBLog(id,title,description,content,imageId,tags).subscribe({
      next: res =>{
        this.getList();
        this.showForm=false;
        this.showSuccess("Cập nhật thành công");
      },error: err =>{
        this.showError(err.message);
      }
    })
  }

  deleteBlog(){
    this.blogService.deleleBlog(this.blogForm.id).subscribe({
      next: res =>{
        this.getList();
        this.onDelete = false;
        this.showWarn("Xóa thành công");
      },error: err =>{
        console.log(err);
        this.showError(err.message);
      }
    })
  }

  selectImage(event : any,res: any){
    let data = document.querySelectorAll('.list-image img');
    data.forEach(i =>{
      i.classList.remove('choosen');
    })
    event.target.classList.toggle("choosen");
    this.imageChoosen = res;
    this.disabled = false;
}

  chooseImage(){
    this.image = this.imageChoosen;
    this.showImage = false;
  }


  showSuccess(text: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: text});``
  }
  showError(text: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: text});
  }
  
  showWarn(text : string) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: text});
  }
}
