import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class HeaderComponent {
  searchQuery: string = '';

  onSearch() {
    if (this.searchQuery) {
      console.log('Searching for:', this.searchQuery);
      // Logic tìm kiếm sẽ được thêm sau (tích hợp API)
    }
  }
}
