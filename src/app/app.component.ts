import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  private map: google.maps.Map = null;
  private heatmap: google.maps.visualization.HeatmapLayer = null;
  title = 'mapAngular';
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  markers = [
    {
      value : 200,
      lat: -23.8779431,
      lng: -49.8046873,
      zoom: 15,
    }
  ];
  
  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;

    // here our in other method after you get the coords; but make sure map is loaded

    const coords: google.maps.LatLng[] = [
      new google.maps.LatLng(-23.8779431, -49.8046873),
      new google.maps.LatLng(-23.8779438, -49.8046878),
      new google.maps.LatLng(-23.8779436, -49.8046876),
      new google.maps.LatLng(-23.8779531, -49.8046873),
      new google.maps.LatLng(-23.8779631, -49.8046673),
      new google.maps.LatLng(-23.8778431, -49.8046773),
     ]; // can also be a google.maps.MVCArray with LatLng[] inside    
    this.heatmap = new google.maps.visualization.HeatmapLayer({
        map: this.map,
        data: coords
    });
}

}
