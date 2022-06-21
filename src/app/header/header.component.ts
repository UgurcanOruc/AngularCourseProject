import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  shoppingListCount!: number;


  constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.shoppingListCount = this.shoppingListService.getIngredients.length;
  }
}
