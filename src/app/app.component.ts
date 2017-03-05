
declare var google: any;


import { Component, OnInit } from '@angular/core';
import { FormData } from './form.data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor() { }

  formData: FormData = null;



  ngOnInit() {
   
    var input = document.getElementById('searchTextField');
    var options = {
      componentRestrictions: {
        country: 'us'
      }
    };

    var autocomplete = new google.maps.places.Autocomplete(input, options);

    google.maps.event.addListener(autocomplete, 'place_changed', function () {

      var place = autocomplete.getPlace();
      var lat = place.geometry.location.lat();
      var long = place.geometry.location.lng();
    

    });


  }

  onSubmit(search: string, zip: number, sort: string) {

    console.log(search + ':' + zip + ':' + sort);
    this.formData = new FormData(search, zip, sort);
  
  }

}
