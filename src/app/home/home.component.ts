import { Component } from '@angular/core';
import { IStation, ResponseModel } from '../station';
import { StationsService } from '../stations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stationList: IStation[] = [];
  travelObj: any = {
    fromStationId:'',
    toStationId:'',
    dateOfTravel:''
  }
 
  constructor(private stationSrv:StationsService, private router: Router) {
 
  }
  ngOnInit(): void {
    this.loadStations();
  }
  loadStations() {
    this.stationSrv.getAllStations().subscribe((res:ResponseModel)=>{
      this.stationList = res.data;
    })
  }
 
  onSearch() {
    this.router.navigate(['/searchh',this.travelObj.fromStationId,this.travelObj.toStationId,this.travelObj.dateOfTravel])
  }

}
