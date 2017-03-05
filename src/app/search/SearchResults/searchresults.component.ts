import { SearchService } from './../search.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormData } from './../../form.data';


import { Response } from '@angular/http';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html'
})
export class SearchResult implements OnInit, OnChanges {
  @Input('formData') formData: FormData;
  results: any;
  errorFlag: boolean;



  ngOnChanges(changes: any) {
    if (changes.formData.currentValue)
      this.getSearchData(changes.formData.currentValue);

  }
  constructor(private wS: SearchService) { }

  ngOnInit(): any {



  }


  getSearchData(formData: FormData) {

    this.wS.getSearchData(formData).subscribe(
      (data: any) => {

        if (data.query.count > 0) {
          //YQL returns single result as object instead of array
          if (data.query.count === 1)
            this.results = [data.query.results.Result];
          else
            this.results = data.query.results.Result;
          console.log(this.results)
          this.errorFlag = false;
        }
        else
          this.errorFlag = true;






      }
    );

  }

}
