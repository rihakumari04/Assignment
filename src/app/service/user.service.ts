import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='https://api.openbrewerydb.org/breweries'
  filterUrl='https://api.openbrewerydb.org/breweries?'
  // sortUrlAsc='https://api.openbrewerydb.org/breweries?by_state=ohio&sort=type,name:asc'
  sortUrlDesc='https://api.openbrewerydb.org/breweries?by_city=san_diego&sort=name:desc'
  constructor(private http:HttpClient) { }
  all():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }
  filterCreate(selectedName:string):Observable<any>{ 
    let params1= new HttpParams().set('by_name',selectedName)
    return this.http.get<any>(this.filterUrl,{params:params1});
  }
  sort():Observable<any>{ 
    // let params1= new HttpParams().set('by_name',selectedName)
    return this.http.get<any>(this.sortUrlDesc);
  }
}
