import { Component, OnInit } from '@angular/core';
import { Test, TestStatistics } from '../models';
import { CalculateService } from '../calculate.service';
import { NavigationService } from '../navigation.service';
 
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  statistics: TestStatistics;
 
  constructor(
    public navigationService: NavigationService,
    public calculatorService: CalculateService
    
  ) {
    this.statistics = {
      totalTests: 0,
      averageSpeed: 0,
      averageAccuracy: 0,
      totalCharacters: 0,
      totalWords: 0,
    };
  }
 
  ngOnInit(): void {
    this.calculateStatistics();
  }
 
  calculateStatistics() {
    this.navigationService
      .getAllTestsOfUser(JSON.parse(this.navigationService.getUser()).userId)
      .subscribe((res: any) => {
        let tests: Test[] = [];
        for (let test of res) {
          tests.push(test);
        }
        this.statistics = this.calculatorService.calculateTestStats(tests);
      });
  }
}