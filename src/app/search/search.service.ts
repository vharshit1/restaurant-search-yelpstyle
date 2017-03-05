import { FormData } from './../form.data';
import { Http, Response, Headers } from '@angular/http';


import {  Output, EventEmitter, Injectable } from '@angular/core';
import 'rxjs/Rx';



@Injectable()
export class SearchService {
  
  


  constructor(private http: Http) { }



    getSearchData(formData) {

     return this.http.get("https://query.yahooapis.com/v1/public/yql?q=select * from local.search where location='"+formData.zip+"' and query='"+formData.search+'\' | sort(field="'+formData.sort+'", descending="false")'+" &format=json&jsonCompat=new")
   
      .map(response => response.json() )
      .catch(this.handleError);
  }



 

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}
