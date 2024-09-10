import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    //estado inicial - 'todos'
    selectedFilter: string = "todos";

    //método para alternar entre os filtros
    selectFilter(filter: string) {
      this.selectedFilter = filter;
    }
}
