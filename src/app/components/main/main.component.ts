import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  data;

  constructor(private apiService: ApiService) {
    apiService.getFrontPage().subscribe((res) => {
      this.data = res;
    });
  }

  ngOnInit(): void {}

  changePage(direction: string, page: number) {
    if (direction == 'next') {
      this.apiService.getPage(page + 1).subscribe((res) => {
        this.data = res;
      });
    } else if (direction == 'back') {
      this.apiService.getPage(page - 1).subscribe((res) => {
        this.data = res;
      });
    }
  }
}
