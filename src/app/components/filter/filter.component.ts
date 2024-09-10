import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
    //estado inicial - 'Todos'
    selectedFilter: string = 'Todos';

    //método para alternar entre os filtros
    selectFilter(filter: string) {
      this.selectedFilter = filter;
    }
}
