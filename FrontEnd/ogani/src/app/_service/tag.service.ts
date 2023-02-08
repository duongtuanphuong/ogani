import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TAG_API = "http://localhost:8080/api/tag/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }


  getListTag():Observable<any>{
    return  this.http.get(TAG_API,httpOptions);
  }

  createTag(name: string):Observable<any>{
    return this.http.post(TAG_API + 'create',{name},httpOptions);
  }

  updateTag(id: number,name: string):Observable<any>{
    return this.http.put(TAG_API + 'update/' + id,{name},httpOptions);
  }

  enableTag(id: number){
    return this.http.put(TAG_API + 'enable/' + id,httpOptions);
  }

  deleteTag(id: number):Observable<any>{
    return this.http.delete(TAG_API + 'delete/' + id,httpOptions);
  }

}
